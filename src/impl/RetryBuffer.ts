import Logger from './Logger'

// TODO create retry options
/* minimum time to schedule retry */
const MIN_RETRY_DELAY = 100
/* interval between successful retries */
const RETRY_INTERVAL = 1

interface RetryItem {
  lines: string[]
  retryCount: number
  next?: RetryItem
}

/**
 * Retries lines up to a limit of max buffer size.
 */
export class RetryBuffer {
  first?: RetryItem
  last?: RetryItem
  size = 0
  nextRetryTime = 0
  closed = false
  private _timeoutHandle: any = undefined

  constructor(
    private maxLines: number,
    private jitterDelay: number,
    private retryLines: (
      lines: string[],
      retryCountdown: number
    ) => Promise<void>
  ) {}

  addLines(lines: string[], retryCount: number, delay: number): void {
    if (this.closed) return
    if (!lines.length) return
    const retryTime = Date.now() + delay
    if (retryTime > this.nextRetryTime) this.nextRetryTime = retryTime
    // ensure at most maxLines ar in the buffer
    while (this.first && this.size + lines.length > this.maxLines) {
      const newFirst = this.first.next
      this.size -= this.first.lines.length
      this.first = newFirst
    }
    const toAdd = {
      lines,
      retryCount,
    }
    if (this.last) {
      this.last.next = toAdd
      this.last = toAdd
    } else {
      this.first = toAdd
      this.last = toAdd
      if (!this._timeoutHandle) {
        this.scheduleRetry(delay)
      }
    }
  }

  removeLines(): RetryItem | undefined {
    if (this.first) {
      const toRetry = this.first
      this.first = this.first.next
      this.size -= toRetry.lines.length
      if (!this.first) this.last = undefined
      return toRetry
    }
    return undefined
  }

  scheduleRetry(delay: number): void {
    this._timeoutHandle = setTimeout(() => {
      const toRetry = this.removeLines()
      if (toRetry) {
        this.retryLines(toRetry.lines, toRetry.retryCount)
          .then(() => {
            // continue with successfull retry
            this.scheduleRetry(RETRY_INTERVAL)
          })
          .catch(_e => {
            // already logged
            this.scheduleRetry(this.nextRetryTime - Date.now())
          })
      } else {
        this._timeoutHandle = undefined
      }
    }, Math.max(MIN_RETRY_DELAY, delay + Math.random() * this.jitterDelay))
  }

  async flush(): Promise<void> {
    let toRetry
    while ((toRetry = this.removeLines())) {
      await this.retryLines(toRetry.lines, toRetry.retryCount)
    }
  }

  close(): void {
    if (this.size > 0) {
      Logger.warn(
        `Closing retry buffer, ${this.size} items were not written to InfluxDB!`,
        null
      )
    }
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle)
      this._timeoutHandle = undefined
    }
  }
}
