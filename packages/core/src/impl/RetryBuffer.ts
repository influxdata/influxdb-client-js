import {Log} from '../util/logger'

interface RetryItem {
  lines: string[]
  retryCount: number
  retryTime: number
  expires: number
  next?: RetryItem
}

type FindShrinkCandidateResult = [found: RetryItem, parent?: RetryItem]

function findShrinkCandidate(first: RetryItem): FindShrinkCandidateResult {
  let parent = undefined
  let found = first
  let currentParent = first
  while (currentParent.next) {
    if (currentParent.next.expires < found.expires) {
      parent = currentParent
      found = currentParent.next
    }
    currentParent = currentParent.next
  }
  return [found, parent]
}

/**
 * Retries lines up to a limit of max buffer size.
 */
export default class RetryBuffer {
  first?: RetryItem
  size = 0
  closed = false
  private _timeoutHandle: any = undefined

  constructor(
    private maxLines: number,
    private retryLines: (
      lines: string[],
      retryCountdown: number,
      started: number
    ) => Promise<void>,
    private onShrink: (entry: {
      lines: string[]
      retryCount: number
      expires: number
    }) => void = () => undefined
  ) {}

  addLines(
    lines: string[],
    retryCount: number,
    delay: number,
    expires: number
  ): void {
    if (this.closed) return
    if (!lines.length) return
    let retryTime = Date.now() + delay
    if (expires < retryTime) {
      retryTime = expires
    }
    // ensure at most maxLines are in the Buffer
    if (this.first && this.size + lines.length > this.maxLines) {
      const origSize = this.size
      const newSize = origSize * 0.7 // reduce to 70 %
      do {
        // remove "oldest" item
        const [found, parent] = findShrinkCandidate(this.first)
        this.size -= found.lines.length
        if (parent) {
          parent.next = found.next
        } else {
          this.first = found.next
          if (this.first) {
            this.scheduleRetry(this.first.retryTime - Date.now())
          }
        }
        found.next = undefined
        this.onShrink(found)
      } while (this.first && this.size + lines.length > newSize)
      Log.error(
        `RetryBuffer: ${
          origSize - this.size
        } oldest lines removed to keep buffer size under the limit of ${
          this.maxLines
        } lines.`
      )
    }
    const toAdd: RetryItem = {
      lines,
      retryCount,
      retryTime,
      expires,
    }
    // insert sorted according to retryTime
    let current: RetryItem | undefined = this.first
    let parent = undefined
    for (;;) {
      if (!current || current.retryTime > retryTime) {
        toAdd.next = current
        if (parent) {
          parent.next = toAdd
        } else {
          this.first = toAdd
          this.scheduleRetry(retryTime - Date.now())
        }
        break
      }
      parent = current
      current = current.next
    }
    this.size += lines.length
  }

  removeLines(): RetryItem | undefined {
    if (this.first) {
      const toRetry = this.first
      this.first = this.first.next
      toRetry.next = undefined
      this.size -= toRetry.lines.length
      return toRetry
    }
    return undefined
  }

  scheduleRetry(delay: number): void {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle)
    }
    this._timeoutHandle = setTimeout(
      () => {
        const toRetry = this.removeLines()
        if (toRetry) {
          this.retryLines(toRetry.lines, toRetry.retryCount, toRetry.expires)
            .catch(() => {
              /* error is already logged, it must be caught */
            })
            .finally(() => {
              // schedule next retry execution
              if (this.first) {
                this.scheduleRetry(this.first.retryTime - Date.now())
              }
            })
        } else {
          this._timeoutHandle = undefined
        }
      },
      Math.max(delay, 0)
    )
  }

  async flush(): Promise<void> {
    let toRetry
    while ((toRetry = this.removeLines())) {
      await this.retryLines(toRetry.lines, toRetry.retryCount, toRetry.expires)
    }
  }

  close(): number {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle)
      this._timeoutHandle = undefined
    }
    this.closed = true
    return this.size
  }
}
