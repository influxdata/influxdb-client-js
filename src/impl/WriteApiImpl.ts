import WriteApi from '../WriteApi'
import {
  WritePrecision,
  DEFAULT_WriteOptions,
  ClientOptions,
  DEFAULT_ConnectionOptions,
  PointSettings,
  WriteOptions,
} from '../options'
import {Transport, SendOptions} from '../transport'
import Logger from './Logger'
import {getRetryDelay, HttpError} from '../errors'
import Point from '../Point'
import {escape} from '../util/escape'
import {currentTime} from '../util/currentTime'

class WriteBuffer {
  length = 0
  message: string[]

  constructor(
    private maxChunkRecords: number,
    private flushFn: (lines: string[]) => Promise<void>,
    private scheduleSend: () => void
  ) {
    this.message = new Array<string>(maxChunkRecords)
  }

  add(record: string): void {
    if (this.length === 0) {
      this.scheduleSend()
    }
    this.message[this.length] = record
    this.length++
    if (this.length >= this.maxChunkRecords) {
      this.flush().catch(_e => {
        // an error is logged in case of failure, avoid UnhandledPromiseRejectionWarning
      })
    }
  }
  flush(): Promise<void> {
    const lines = this.reset()
    if (lines.length > 0) {
      return this.flushFn(lines)
    } else {
      return Promise.resolve()
    }
  }
  reset(): string[] {
    const retVal = this.message.slice(0, this.length)
    this.length = 0
    return retVal
  }
}

export default class WriteApiImpl implements WriteApi, PointSettings {
  private buffer: WriteBuffer
  private closed = false
  private httpPath: string
  private writeOptions: WriteOptions
  private sendOptions: Partial<SendOptions> = {
    method: 'POST',
    maxRetries: 0, // we control manual retry attempts
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  }
  private retryJitter: number
  private _timeoutHandle: any = undefined
  private currentTime: () => string

  constructor(
    private transport: Transport,
    org: string,
    bucket: string,
    precision: WritePrecision,
    clientOptions: ClientOptions
  ) {
    this.httpPath = `/api/v2/write?org=${encodeURIComponent(
      org
    )}&bucket=${encodeURIComponent(bucket)}&precision=${precision}`
    this.writeOptions = {
      ...DEFAULT_WriteOptions,
      ...clientOptions.writeOptions,
    }
    this.currentTime = currentTime[precision]

    this.retryJitter =
      clientOptions.retryJitter !== undefined
        ? clientOptions.retryJitter
        : (DEFAULT_ConnectionOptions.retryJitter as number)

    const scheduleNextSend = (): void => {
      if (this.writeOptions.flushInterval > 0) {
        this._clearFlushTimeout()
        /* istanbul ignore else manually reviewed, hard to reproduce */
        if (!this.closed) {
          this._timeoutHandle = setTimeout(
            () =>
              this.sendBatch(
                this.buffer.reset(),
                this.writeOptions.maxRetries
              ).catch(_e => {
                // an error is logged in case of failure, avoid UnhandledPromiseRejectionWarning
              }),
            this.writeOptions.flushInterval
          )
        }
      }
    }
    this.buffer = new WriteBuffer(
      this.writeOptions.batchSize,
      message => {
        this._clearFlushTimeout()
        return this.sendBatch(message, this.writeOptions.maxRetries)
      },
      scheduleNextSend
    )
  }

  sendBatch(lines: string[], retryCountdown: number): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self: WriteApiImpl = this
    if (!this.closed && lines.length > 0) {
      return new Promise<void>((resolve, reject) => {
        this.transport.send(this.httpPath, lines.join('\n'), this.sendOptions, {
          error(error: Error): void {
            if (
              !self.closed &&
              retryCountdown > 0 &&
              (!(error instanceof HttpError) ||
                (error as HttpError).statusCode >= 429)
            ) {
              Logger.warn(
                `Write to influx DB failed (remaining attempts: ${retryCountdown}).`,
                error
              )
              self._retry(
                lines,
                retryCountdown - 1,
                getRetryDelay(error, self.retryJitter)
              )
              reject(error)
            } else {
              Logger.error(`Write to influx DB failed.`, error)
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

  private _clearFlushTimeout(): void {
    if (this._timeoutHandle !== undefined) {
      clearTimeout(this._timeoutHandle)
      this._timeoutHandle = undefined
    }
  }

  private _retry(
    lines: string[],
    remainingRetries: number,
    retryDelay: number
  ): void {
    /* istanbul ignore else manually reviewed, hard to reproduce */
    if (!this.closed) {
      // TODO queue, monitor and limit retries, cancel them on close
      setTimeout(() => {
        this.sendBatch(lines, remainingRetries).catch(() => {
          // an error is logged in case of failure, avoid UnhandledPromiseRejectionWarning
        })
      }, retryDelay)
    }
  }

  writeRecord(record: string): void {
    this.buffer.add(record)
  }
  writeRecords(records: ArrayLike<string>): void {
    for (let i = 0; i < records.length; i++) {
      this.buffer.add(records[i])
    }
  }
  writePoint(point: Point): void {
    const line = point.toLineProtocol(this)
    console.log(line)
    if (line) this.buffer.add(line)
  }
  writePoints(points: ArrayLike<Point>): void {
    for (let i = 0; i < points.length; i++) {
      this.writePoint(points[i])
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
  dispose(): void {
    this._clearFlushTimeout()
    this.closed = true
  }

  // PointSettings
  defaultTags: {[key: string]: string} | undefined
  useDefaultTags(tags: {[key: string]: string}): WriteApi {
    this.defaultTags = undefined
    Object.keys(tags).forEach((key: string) => {
      ;(this.defaultTags || (this.defaultTags = {}))[key] = escape.tag(
        tags[key]
      )
    })
    return this
  }
  convertTime(value: string | undefined): string | undefined {
    if (typeof value === 'string') {
      return value ? value : undefined
    } else {
      return this.currentTime()
    }
  }
}
