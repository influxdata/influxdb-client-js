import {Transport} from './transport'

export interface ConnectionOptions {
  /** base URL */
  url: string
  /** authentication token */
  token?: string
  /** socket timeout */
  timeout?: number
  /** maximum number of retries for HTTP calls that could succeed when retried  */
  maxRetries?: number
  /** include random milliseconds when retrying HTTP calls */
  retryJitter?: number
  /** extra options for the transport layer */
  transportOptions?: {[key: string]: any}
}

export const DEFAULT_ConnectionOptions: Partial<ConnectionOptions> = {
  timeout: 10000,
  maxRetries: 0,
  retryJitter: 1000,
}

export interface RetryDelayStrategyOptions {
  /** include random milliseconds when retrying HTTP calls */
  retryJitter: number
  /** minimum delay when retrying write  */
  minRetryDelay: number
  /** maximum delay when retrying write  */
  maxRetryDelay: number
}

export interface WriteRetryOptions extends RetryDelayStrategyOptions {
  /** max number of retries when write fails */
  maxRetries: number
  /** the maximum size of retry-buffer (in lines) */
  maxBufferLines: number
}

/**
 * Options used by [[WriteApi]]
 */
export interface WriteOptions extends WriteRetryOptions {
  /** max number of records to send in a batch   */
  batchSize: number
  /** delay between data flushes in milliseconds, at most `batch size` records are sent during flush  */
  flushInterval: number
}

export const DEFAULT_RetryDelayStrategyOptions = Object.freeze({
  retryJitter: 200,
  minRetryDelay: 1000,
  maxRetryDelay: 15000,
})

export const DEFAULT_WriteOptions: WriteOptions = Object.freeze({
  batchSize: 1000,
  flushInterval: 60000,
  maxRetries: 2,
  maxBufferLines: 32_000,
  ...DEFAULT_RetryDelayStrategyOptions,
})

export interface ClientOptions extends ConnectionOptions {
  /** to override default writing options */
  writeOptions?: Partial<WriteOptions>
  /** to specify custom transport */
  transport?: Transport
}

export const enum WritePrecision {
  /** nanosecond */
  ns = 'ns',
  /* microsecond */
  us = 'us',
  /** millisecond */
  ms = 'ms',
  /* second */
  s = 's',
}

export interface PointSettings {
  defaultTags?: {[key: string]: string}
  convertTime?: (value: string | undefined) => string | undefined
}
