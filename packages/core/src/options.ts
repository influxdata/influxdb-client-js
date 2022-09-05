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
  /**
   * socket timeout, 10000 milliseconds by default in node.js
   * @defaultValue 10000
   */
  timeout?: number
  /**
   * TransportOptions supply extra options for the transport layer, they differ between node.js and browser/deno.
   * Node.js transport accepts options specified in {@link https://nodejs.org/api/http.html#http_http_request_options_callback | http.request } or
   * {@link https://nodejs.org/api/https.html#https_https_request_options_callback | https.request }. For example, an `agent` property can be set to
   * {@link https://www.npmjs.com/package/proxy-http-agent | setup HTTP/HTTPS proxy }, {@link  https://nodejs.org/api/tls.html#tls_tls_connect_options_callback | rejectUnauthorized }
   * property can disable TLS server certificate verification. Additionally,
   * {@link https://github.com/follow-redirects/follow-redirects | follow-redirects } property can be also specified
   * in order to follow redirects in node.js.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch | fetch } is used under the hood in browser/deno.
   * For example,
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch | redirect } property can be set to 'error' to abort request if a redirect occurs.
   */
  transportOptions?: {[key: string]: any}
  /**
   * Default HTTP headers to send with every request.
   */
  headers?: Record<string, string>
  /**
   * Full HTTP web proxy URL including schema, for example http://your-proxy:8080.
   */
  proxyUrl?: string
}

/** default connection options */
export const DEFAULT_ConnectionOptions: Partial<ConnectionOptions> = {
  timeout: 10000,
}

/**
 * Options that configure strategy for retrying failed requests.
 */
export interface RetryDelayStrategyOptions {
  /** add `random(retryJitter)` milliseconds delay when retrying HTTP calls */
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
   * @param attempt - count of already failed attempts to write the lines (1 ... maxRetries+1)
   * @param expires - expiration time for the lines to be retried in millis since epoch
   * @returns a Promise to force the API to use it as a result of the flush operation,
   * void/undefined to continue with default retry mechanism
   */
  writeFailed(
    this: WriteApi,
    error: Error,
    lines: Array<string>,
    attempt: number,
    expires: number
  ): Promise<void> | void

  /**
   * WriteSuccess is informed about successfully written lines.
   * @param this - the instance of the API in use
   * @param lines - written lines
   */
  writeSuccess(this: WriteApi, lines: Array<string>): void

  /**
   * WriteRetrySkipped is informed about lines that were removed from the retry buffer
   * to keep the size of the retry buffer under the configured limit (maxBufferLines).
   * @param entry - lines that were skipped
   */
  writeRetrySkipped(entry: {lines: Array<string>; expires: number}): void

  /** max count of retries after the first write fails */
  maxRetries: number
  /** max time (millis) that can be spent with retries */
  maxRetryTime: number
  /** the maximum size of retry-buffer (in lines) */
  maxBufferLines: number
}

/**
 * Options used by {@link WriteApi} .
 */
export interface WriteOptions extends WriteRetryOptions {
  /** max number of records/lines to send in a batch   */
  batchSize: number
  /** delay between data flushes in milliseconds, at most `batch size` records are sent during flush  */
  flushInterval: number
  /** default tags, unescaped */
  defaultTags?: Record<string, string>
  /** HTTP headers that will be sent with every write request */
  headers?: {[key: string]: string}
  /** When specified, write bodies larger than the threshold are gzipped  */
  gzipThreshold?: number
  /** max size of a batch in bytes */
  maxBatchBytes: number
  /** InfluxDB Enterprise write consistency as explained in https://docs.influxdata.com/enterprise_influxdb/v1.9/concepts/clustering/#write-consistency */
  consistency?: 'any' | 'one' | 'quorum' | 'all'
}

/** default RetryDelayStrategyOptions */
export const DEFAULT_RetryDelayStrategyOptions = {
  retryJitter: 200,
  minRetryDelay: 5000,
  maxRetryDelay: 125000,
  exponentialBase: 5,
  randomRetry: true,
}

/** default writeOptions */
export const DEFAULT_WriteOptions: WriteOptions = {
  batchSize: 1000,
  maxBatchBytes: 50_000_000, // default max batch size in the cloud
  flushInterval: 60000,
  writeFailed: function () {},
  writeSuccess: function () {},
  writeRetrySkipped: function () {},
  maxRetries: 5,
  maxRetryTime: 180_000,
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
 * See {@link https://docs.influxdata.com/influxdb/latest/api/#operation/PostWrite }
 */
export type WritePrecisionType = 'ns' | 'us' | 'ms' | 's'
