import WriteApi from '../WriteApi'
import {
  WritePrecission,
  DEFAULT_WriteOptions,
  ClientOptions,
  DEFAULT_ConnectionOptions,
} from '../options'
import {Transport} from '../transport'
import Logger from './Logger'
import {getRetryDelay} from '../errors'

class WriteBuffer {
  length = 0
  message?: string = undefined

  constructor(
    private maxRecords: number,
    private flushFn: (message: string) => void
  ) {}

  add(record: string): void {
    if (this.length === 0) {
      this.message = record
    } else {
      this.message = this.message + '\n' + record
    }
    this.length++
    if (this.length >= this.maxRecords) {
      this.flush()
    }
  }
  flush(): void {
    if (this.message) {
      const message = this.message
      this.message = undefined
      this.length = 0
      this.flushFn(message)
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
    const maxRetries =
      clientOptions.maxRetries !== undefined
        ? clientOptions.maxRetries
        : (DEFAULT_ConnectionOptions.maxRetries as number)
    const sendOptions = {
      method: 'POST',
      maxRetries,
    }
    const writeOptions = {
      ...DEFAULT_WriteOptions,
      ...clientOptions.writeOptions,
    }
    const retryJitter =
      clientOptions.retryJitter !== undefined
        ? clientOptions.retryJitter
        : (DEFAULT_ConnectionOptions.retryJitter as number)

    const sendBatch = (
      message: string | undefined,
      retryCountdown: number,
      scheduled: boolean
    ): void => {
      if (message) {
        if (!scheduled) scheduleNextSend() // postpone periodic flush
        transport.send(httpPath, message, sendOptions, {
          error(error: Error): void {
            if (retryCountdown > 0) {
              Logger.warn(
                `Write to influx DB failed, retrying (attempt=${sendOptions.maxRetries -
                  retryCountdown})`,
                error
              )
              setTimeout(
                () => sendBatch(message, retryCountdown - 1, scheduled),
                getRetryDelay(error, retryJitter)
              )
            } else {
              Logger.error(
                `Write to influx DB failed after ${sendOptions.maxRetries +
                  1} attempts`,
                error
              )
              scheduleNextSend() // schedule next periodic flush
            }
          },
          complete(): void {
            scheduleNextSend() // schedule next periodic flush
          },
        })
      }
    }
    this.buffer = new WriteBuffer(writeOptions.batchSize, message => {
      sendBatch(message, maxRetries, false)
    })
    let timeoutHandle: any = undefined
    const scheduleNextSend = () => {
      if (writeOptions.flushInterval > 0) {
        if (timeoutHandle !== undefined) {
          clearTimeout(timeoutHandle)
          timeoutHandle = undefined
        }
        if (!this.closed) {
          timeoutHandle = setTimeout(
            () => sendBatch(this.buffer.reset(), maxRetries, true),
            writeOptions.flushInterval
          )
        }
      }
    }

    scheduleNextSend()
  }

  writeRecord(record: string): void {
    this.buffer.add(record)
  }
  writeRecords(records: string[]): void {
    for (let i = 0; i < records.length; i++) {
      this.buffer.add(records[i])
    }
  }
  flush(): void {
    this.buffer.flush()
  }
  close(): void {
    this.closed = true
    this.flush()
  }
}
