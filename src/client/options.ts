import {Transport} from './transport'

export interface ConnectionOptions {
  /** base URL */
  url: string
  /** authentication token */
  token?: string
  /** socket timeout */
  timeout?: number
  /** maximum number of retries for HTTP calls that could succeed when called again  */
  maxRetries?: number
  /** include random milliseconds when retrying HTTP calls */
  retryJitter?: number
  /** extra options for the transport layer */
  transportOptions?: {[key: string]: any}
}

export interface WriteOptions {
  /** max number of records to send in a batch   */
  batchSize: number
  /** flush interval in milliseconds  */
  flushInterval: number
  /** max items to store in the buffer */
  bufferLimit: number
}
export const DEFAULT_WriteOptions: WriteOptions = {
  batchSize: 1000,
  flushInterval: 1000,
  bufferLimit: 1000,
}

export interface ClientOptions extends ConnectionOptions {
  /** to override default writing options */
  writeOptions?: WriteOptions
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
