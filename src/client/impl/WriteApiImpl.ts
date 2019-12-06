import WriteApi from '../WriteApi'
import {
  WritePrecission,
  DEFAULT_WriteOptions,
  ClientOptions,
  DEFAULT_ConnectionOptions,
} from '../options'
import {Transport} from '../transport'
import Logger from './Logger'
import {getRetryDelay, canRetryHttpCall} from '../errors'

class WriteBuffer {
  length = 0
  message?: string = undefined

  constructor(
    private maxRecords: number,
    private flushFn: (message: string) => Promise<void>,
    private scheduleSend: () => void
  ) {}

  add(record: string): void {
    if (this.length === 0) {
      this.message = record
      this.scheduleSend()
    } else {
      this.message = this.message + '\n' + record
    }
    this.length++
    if (this.length >= this.maxRecords) {
      this.flush()
    }
  }
  flush(): Promise<void> {
    if (this.message) {
      const message = this.message
      this.message = undefined
      this.length = 0
      return this.flushFn(message)
    } else {
      return Promise.resolve()
    }
  }
  reset(): string | undefined {
    if (this.message) {
      const message = this.message
      this.message = undefined
      this.length = 0
      return message
    }
    return undefined
  }
}

export default class WriteApiImpl implements WriteApi {
  private buffer: WriteBuffer
  private closed = false

  private _timeoutHandle: any = undefined

  constructor(
    transport: Transport,
    org: string,
    bucket: string,
    precision: WritePrecission,
    clientOptions: ClientOptions
  ) {
    const httpPath = `/write?org=${encodeURIComponent(
      org
    )}&bucket=${encodeURIComponent(bucket)}&precision=${precision}`
    const writeOptions = {
      ...DEFAULT_WriteOptions,
      ...clientOptions.writeOptions,
    }
    const sendOptions = {
      method: 'POST',
      maxRetries: 0, // we control manual retry attempts
    }
    const retryJitter =
      clientOptions.retryJitter !== undefined
        ? clientOptions.retryJitter
        : (DEFAULT_ConnectionOptions.retryJitter as number)

    /** sendBatch uses scheduleNextSend and vice versa */
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    const sendBatch = (
      message: string | undefined,
      retryCountdown: number
    ): Promise<void> => {
      if (!this.closed && message) {
        return new Promise<void>((resolve, reject) => {
          // TODO monitor and limit pending writes
          transport.send(httpPath, message, sendOptions, {
            error(error: Error): void {
              if (
                !self.closed &&
                retryCountdown > 0 &&
                canRetryHttpCall(error)
              ) {
                Logger.warn(
                  `Write to influx DB failed, retrying (attempt=${writeOptions.maxRetries -
                    retryCountdown}).`,
                  error
                )
                self._scheduleRetry(
                  () =>
                    sendBatch(message, retryCountdown - 1)
                      .then(resolve)
                      .catch(reject),
                  getRetryDelay(error, retryJitter)
                )
              } else {
                Logger.error(
                  `Write to influx DB failed after ${writeOptions.maxRetries -
                    retryCountdown +
                    1} attempts.`,
                  error
                )
                reject(error)
              }
            },
            complete(): void {
              resolve()
            },
          })
        })
      } else {
        return Promise.resolve()
      }
    }
    const scheduleNextSend = (): void => {
      if (writeOptions.flushInterval > 0) {
        this._clearFlushTimeout()
        if (!this.closed) {
          this._timeoutHandle = setTimeout(
            () => sendBatch(this.buffer.reset(), writeOptions.maxRetries),
            writeOptions.flushInterval
          )
        }
      }
    }
    this.buffer = new WriteBuffer(
      writeOptions.batchSize,
      message => {
        this._clearFlushTimeout()
        return sendBatch(message, writeOptions.maxRetries)
      },
      scheduleNextSend
    )
  }

  private _clearFlushTimeout(): void {
    if (this._timeoutHandle !== undefined) {
      clearTimeout(this._timeoutHandle)
      this._timeoutHandle = undefined
    }
  }

  private _scheduleRetry(fn: () => any, delay: number): void {
    if (!this.closed) {
      // TODO monitor and limit retries, cancel them on close
      setTimeout(fn, delay)
    }
  }

  writeRecord(record: string): void {
    this.buffer.add(record)
  }
  writeRecords(records: string[]): void {
    for (let i = 0; i < records.length; i++) {
      this.buffer.add(records[i])
    }
  }
  flush(): Promise<void> {
    return this.buffer.flush()
  }
  close(): Promise<void> {
    const retVal = this.flush()
    this.closed = true
    return retVal
  }
}
