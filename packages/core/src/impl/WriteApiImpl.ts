import WriteApi from '../WriteApi'
import {
  DEFAULT_WriteOptions,
  WriteOptions,
  WritePrecisionType,
} from '../options'
import {Transport, SendOptions} from '../transport'
import {Headers} from '../results'
import Logger from './Logger'
import {HttpError, RetryDelayStrategy} from '../errors'
import {Point} from '../Point'
import {escape} from '../util/escape'
import {currentTime, dateToProtocolTimestamp} from '../util/currentTime'
import {createRetryDelayStrategy} from './retryStrategy'
import RetryBuffer from './RetryBuffer'

class WriteBuffer {
  length = 0
  lines: string[]

  constructor(
    private maxChunkRecords: number,
    private flushFn: (lines: string[]) => Promise<void>,
    private scheduleSend: () => void
  ) {
    this.lines = new Array<string>(maxChunkRecords)
  }

  add(record: string): void {
    if (this.length === 0) {
      this.scheduleSend()
    }
    this.lines[this.length] = record
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
    const retVal = this.lines.slice(0, this.length)
    this.length = 0
    return retVal
  }
}

export default class WriteApiImpl implements WriteApi {
  private writeBuffer: WriteBuffer
  private closed = false
  private httpPath: string
  private writeOptions: WriteOptions
  private sendOptions: SendOptions
  private _timeoutHandle: any = undefined
  private currentTime: () => string
  private dateToProtocolTimestamp: (d: Date) => string

  retryBuffer: RetryBuffer
  retryStrategy: RetryDelayStrategy

  constructor(
    private transport: Transport,
    org: string,
    bucket: string,
    precision: WritePrecisionType,
    writeOptions?: Partial<WriteOptions>
  ) {
    this.httpPath = `/api/v2/write?org=${encodeURIComponent(
      org
    )}&bucket=${encodeURIComponent(bucket)}&precision=${precision}`
    this.writeOptions = {
      ...DEFAULT_WriteOptions,
      ...writeOptions,
    }
    this.currentTime = currentTime[precision]
    this.dateToProtocolTimestamp = dateToProtocolTimestamp[precision]
    if (this.writeOptions.defaultTags) {
      this.useDefaultTags(this.writeOptions.defaultTags)
    }
    this.sendOptions = {
      method: 'POST',
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        ...writeOptions?.headers,
      },
    }

    const scheduleNextSend = (): void => {
      if (this.writeOptions.flushInterval > 0) {
        this._clearFlushTimeout()
        /* istanbul ignore else manually reviewed, hard to reproduce */
        if (!this.closed) {
          this._timeoutHandle = setTimeout(
            () =>
              this.sendBatch(
                this.writeBuffer.reset(),
                this.writeOptions.maxRetries + 1
              ).catch(_e => {
                // an error is logged in case of failure, avoid UnhandledPromiseRejectionWarning
              }),
            this.writeOptions.flushInterval
          )
        }
      }
    }
    // write buffer
    this.writeBuffer = new WriteBuffer(
      this.writeOptions.batchSize,
      lines => {
        this._clearFlushTimeout()
        return this.sendBatch(lines, this.writeOptions.maxRetries + 1)
      },
      scheduleNextSend
    )
    this.sendBatch = this.sendBatch.bind(this)
    // retry buffer
    this.retryStrategy = createRetryDelayStrategy(this.writeOptions)
    this.retryBuffer = new RetryBuffer(
      this.writeOptions.maxBufferLines,
      this.sendBatch
    )
  }

  sendBatch(lines: string[], attempts: number): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self: WriteApiImpl = this
    if (!this.closed && lines.length > 0) {
      return new Promise<void>((resolve, reject) => {
        let responseStatusCode: number | undefined
        const callbacks = {
          responseStarted(_headers: Headers, statusCode?: number): void {
            responseStatusCode = statusCode
          },
          error(error: Error): void {
            const failedAttempts = self.writeOptions.maxRetries + 2 - attempts
            // call the writeFailed listener and check if we can retry
            const onRetry = self.writeOptions.writeFailed.call(
              self,
              error,
              lines,
              failedAttempts
            )
            if (onRetry) {
              onRetry.then(resolve, reject)
              return
            }
            if (
              !self.closed &&
              attempts > 1 &&
              (!(error instanceof HttpError) ||
                (error as HttpError).statusCode >= 429)
            ) {
              Logger.warn(
                `Write to InfluxDB failed (remaining attempts: ${attempts -
                  1}).`,
                error
              )
              self.retryBuffer.addLines(
                lines,
                attempts - 1,
                self.retryStrategy.nextDelay(error, failedAttempts)
              )
              reject(error)
              return
            }
            Logger.error(`Write to InfluxDB failed.`, error)
            reject(error)
          },
          complete(): void {
            // older implementations of transport do not report status code
            if (responseStatusCode == 204 || responseStatusCode == undefined) {
              self.writeOptions.writeSuccess.call(self, lines)
              self.retryStrategy.success()
              resolve()
            } else {
              const message = `204 HTTP response status code expected, but ${responseStatusCode} returned`
              const error = new HttpError(
                responseStatusCode,
                message,
                undefined,
                '0'
              )
              error.message = message
              callbacks.error(error)
            }
          },
        }
        this.transport.send(
          this.httpPath,
          lines.join('\n'),
          this.sendOptions,
          callbacks
        )
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

  writeRecord(record: string): void {
    if (this.closed) {
      throw new Error('writeApi: already closed!')
    }
    this.writeBuffer.add(record)
  }
  writeRecords(records: ArrayLike<string>): void {
    if (this.closed) {
      throw new Error('writeApi: already closed!')
    }
    for (let i = 0; i < records.length; i++) {
      this.writeBuffer.add(records[i])
    }
  }
  writePoint(point: Point): void {
    if (this.closed) {
      throw new Error('writeApi: already closed!')
    }
    const line = point.toLineProtocol(this)
    if (line) this.writeBuffer.add(line)
  }
  writePoints(points: ArrayLike<Point>): void {
    if (this.closed) {
      throw new Error('writeApi: already closed!')
    }
    for (let i = 0; i < points.length; i++) {
      const line = points[i].toLineProtocol(this)
      if (line) this.writeBuffer.add(line)
    }
  }
  async flush(withRetryBuffer?: boolean): Promise<void> {
    await this.writeBuffer.flush()
    if (withRetryBuffer) {
      return await this.retryBuffer.flush()
    }
  }
  close(): Promise<void> {
    const retVal = this.writeBuffer.flush().finally(() => {
      const remaining = this.retryBuffer.close()
      if (remaining) {
        Logger.error(
          `Retry buffer closed with ${remaining} items that were not written to InfluxDB!`,
          null
        )
      }
      this.closed = true
    })
    return retVal
  }
  dispose(): number {
    this._clearFlushTimeout()
    this.closed = true
    return this.retryBuffer.close() + this.writeBuffer.length
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
  convertTime(value: string | number | Date | undefined): string | undefined {
    if (value === undefined) {
      return this.currentTime()
    } else if (typeof value === 'string') {
      return value.length > 0 ? value : undefined
    } else if (value instanceof Date) {
      return this.dateToProtocolTimestamp(value)
    } else if (typeof value === 'number') {
      return String(Math.floor(value))
    } else {
      // Logger.warn(`unsupported timestamp value: ${value}`)
      return String(value)
    }
  }
}
