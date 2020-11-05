import {Transport} from './transport'
import WriteApi from './WriteApi'

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
  /** minimum delay when retrying write (milliseconds) */
  minRetryDelay: number
  /** maximum delay when retrying write (milliseconds) */
  maxRetryDelay: number
  /** base for the exponential retry delay, the next delay is computed as `minRetryDelay * exponentialBase^(attempts-1) + random(retryJitter)` */
  exponentialBase: number
}

/**
 * Options that configure strategy for retrying failed InfluxDB write operations.
 */
export interface WriteRetryOptions extends RetryDelayStrategyOptions {
  /**
   * writeFailed is called to inform about write error
   * @param this - the instance of the API that failed
   * @param error - write error
   * @param lines - failed lines
   * @param attempts - a number of failed attempts to write the lines
   * @returns a Promise to force the API to use it as a result of the flush operation,
   * void/undefined to continue with default retry mechanism
   */
  writeFailed(
    this: WriteApi,
    error: Error,
    lines: Array<string>,
    attempts: number
  ): Promise<void> | void
  /** max number of retries when write fails */
  maxRetries: number
  /** the maximum size of retry-buffer (in lines) */
  maxBufferLines: number
}

/**
 * Options used by {@link WriteApi} .
 */
export interface WriteOptions extends WriteRetryOptions {
  /** max number of records to send in a batch   */
  batchSize: number
  /** delay between data flushes in milliseconds, at most `batch size` records are sent during flush  */
  flushInterval: number
  /** default tags, unescaped */
  defaultTags?: Record<string, string>
}

/** default RetryDelayStrategyOptions */
export const DEFAULT_RetryDelayStrategyOptions = {
  retryJitter: 200,
  minRetryDelay: 5000,
  maxRetryDelay: 180000,
  exponentialBase: 5,
}

/** default writeOptions */
export const DEFAULT_WriteOptions: WriteOptions = {
  batchSize: 1000,
  flushInterval: 60000,
  writeFailed: function() {},
  maxRetries: 3,
  maxBufferLines: 32_000,
  // a copy of DEFAULT_RetryDelayStrategyOptions, so that DEFAULT_WriteOptions could be tree-shaken
  retryJitter: 200,
  minRetryDelay: 5000,
  maxRetryDelay: 180000,
  exponentialBase: 5,
}

/**
 * Options used by {@link InfluxDB} .
 */
export interface ClientOptions extends ConnectionOptions {
  /** supplies and overrides default writing options */
  writeOptions?: Partial<WriteOptions>
  /** specifies custom transport */
  transport?: Transport
}

/**
 * Precission for write operations.
 * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite }
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
export type WritePrecisionType = keyof typeof WritePrecision | WritePrecision

/**
 * Settings that control the way of how a {@link Point} is serialized
 * to a protocol line.
 */
export interface PointSettings {
  defaultTags?: {[key: string]: string}
  convertTime?: (
    value: string | number | Date | undefined
  ) => string | undefined
}
