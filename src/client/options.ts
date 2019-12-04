import {Transport} from './transport'

export interface ConnectionOptions {
  /** base URL */
  url: string
  /** authentication token */
  token?: string
  /** socket timeout */
  timeout?: number
  /** maximum number of retries for repeatable HTTP calls  */
  maxRetries?: number
  /** include random milliseconds when retrying HTTP calls */
  retryJitter?: number
  /** extra options for the transport layer */
  transportOptions?: {[key: string]: any}
}

export const DEFAULT_ConnectionOptions: Partial<ConnectionOptions> = {
  timeout: 10000,
  maxRetries: 3,
  retryJitter: 1000,
}

export interface WriteOptions {
  /** max number of records to send in a batch   */
  batchSize: number
  /** delay between data flushes in milliseconds, at most batch size records are sent during flush  */
  flushInterval: number
}
export const DEFAULT_WriteOptions: WriteOptions = Object.freeze({
  batchSize: 1000,
  flushInterval: 60000,
})

export interface ClientOptions extends ConnectionOptions {
  /** to override default writing options */
  writeOptions?: Partial<WriteOptions>
  /** to specify custom transport */
  transport?: Transport
}

export const enum WritePrecission {
  /** nanosecond */
  ns = 'ns',
  /* microsecond */
  us = 'us',
  /** millisecond */
  ms = 'ms',
  /* second */
  s = 's',
  /** don't send timestamp, let server generate timestamp value */
  none = '',
}
