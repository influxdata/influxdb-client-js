import {Transport} from './transport'

/**
 * Option for the communication with InfluxDB server.
 */
export interface ConnectionOptions {
  /** base URL */
  url: string
  /** authentication token */
  token?: string
  /** socket timeout */
  timeout?: number
  /** extra options for the transport layer */
  transportOptions?: {[key: string]: any}
}

/** default connection options */
export const DEFAULT_ConnectionOptions: Partial<ConnectionOptions> = {
  timeout: 10000,
}

/**
 * Options that configure strategy for retrying failed requests.
 */
export interface RetryDelayStrategyOptions {
  /** include random milliseconds when retrying HTTP calls */
  retryJitter: number
  /** minimum delay when retrying write  */
  minRetryDelay: number
  /** maximum delay when retrying write  */
  maxRetryDelay: number
}

/**
 * Options that configure strategy for retrying failed InfluxDB write operations.
 */
export interface WriteRetryOptions extends RetryDelayStrategyOptions {
  /** max number of retries when write fails */
  maxRetries: number
  /** the maximum size of retry-buffer (in lines) */
  maxBufferLines: number
}

/**
 * Options used by [[WriteApi]] .
 */
export interface WriteOptions extends WriteRetryOptions {
  /** max number of records to send in a batch   */
  batchSize: number
  /** delay between data flushes in milliseconds, at most `batch size` records are sent during flush  */
  flushInterval: number
}

/** default RetryDelayStrategyOptions */
export const DEFAULT_RetryDelayStrategyOptions = Object.freeze({
  retryJitter: 200,
  minRetryDelay: 1000,
  maxRetryDelay: 15000,
})

/** default writeOptions */
export const DEFAULT_WriteOptions: WriteOptions = Object.freeze({
  batchSize: 1000,
  flushInterval: 60000,
  maxRetries: 2,
  maxBufferLines: 32_000,
  ...DEFAULT_RetryDelayStrategyOptions,
})

/**
 * Options used by [[InfluxDB]] .
 */
export interface ClientOptions extends ConnectionOptions {
  /** supplies and overrides default writing options */
  writeOptions?: Partial<WriteOptions>
  /** specifies custom transport */
  transport?: Transport
}

/**
 * Precission for write operations.
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite
 */
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

/**
 * Settings that control the way of how a [[Point]] is serialized
 * to a protocol line.
 */
export interface PointSettings {
  defaultTags?: {[key: string]: string}
  convertTime?: (
    value: string | number | Date | undefined
  ) => string | undefined
}
