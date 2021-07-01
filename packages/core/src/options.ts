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
  /** extra options for the transport layer, they can setup a proxy agent or an abort signal in node.js transport that relies upon {@link https://nodejs.org/api/http.html#http_http_request_url_options_callback } */
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
  /** add `random(retryJitter)` milliseconds when retrying HTTP calls */
  retryJitter: number
  /** minimum delay when retrying write (milliseconds) */
  minRetryDelay: number
  /** maximum delay when retrying write (milliseconds) */
  maxRetryDelay: number
  /** base for the exponential retry delay */
  exponentialBase: number
  /**
   * randomRetry indicates whether the next retry delay is deterministic (false) or random (true).
   * The deterministic delay starts with `minRetryDelay * exponentialBase` and it is multiplied
   * by `exponentialBase` until it exceeds `maxRetryDelay`.
   * When random is `true`, the next delay is computed as a random number between next retry attempt (upper)
   * and the lower number in the deterministic sequence. `random(retryJitter)` is added to every returned value.
   */
  randomRetry: boolean
}

/**
 * Options that configure strategy for retrying failed InfluxDB write operations.
 */
export interface WriteRetryOptions extends RetryDelayStrategyOptions {
  /**
   * WriteFailed is called to inform about write errors.
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

  /**
   * WriteSuccess is informed about successfully written lines.
   * @param this - the instance of the API in use
   * @param lines - written lines
   */
  writeSuccess(this: WriteApi, lines: Array<string>): void

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
  /** HTTP headers that will be sent with every write request */
  headers?: {[key: string]: string}
  /** When specified, write bodies larger than the threshold are gzipped  */
  gzipThreshold?: number
}

/** default RetryDelayStrategyOptions */
export const DEFAULT_RetryDelayStrategyOptions = {
  retryJitter: 200,
  minRetryDelay: 5000,
  maxRetryDelay: 180000,
  exponentialBase: 5,
  randomRetry: true,
}

/** default writeOptions */
export const DEFAULT_WriteOptions: WriteOptions = {
  batchSize: 1000,
  flushInterval: 60000,
  writeFailed: function() {},
  writeSuccess: function() {},
  maxRetries: 5,
  maxBufferLines: 32_000,
  // a copy of DEFAULT_RetryDelayStrategyOptions, so that DEFAULT_WriteOptions could be tree-shaken
  retryJitter: 200,
  minRetryDelay: 5000,
  maxRetryDelay: 125000,
  exponentialBase: 2,
  gzipThreshold: 1000,
  randomRetry: true,
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
 * Timestamp precision used in write operations.
 * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite }
 */
export type WritePrecisionType = 'ns' | 'us' | 'ms' | 's'
