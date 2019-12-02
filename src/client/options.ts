export interface ConnectionOptions {
  /** base URL */
  url: string
  /** authentication token */
  token: string
  /** socket timeout */
  timeout?: number
  /** maximum number of retries for HTTP calls that could succeed when called again  */
  maxRetries?: number
  /** include random milliseconds when retrying HTTP calls */
  retryJitter?: number
}

// export interface WriteOptions {
//   /** default tags to add to every write */
//   defaultTags: {[key: string]: string}
// }

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ClientOptions extends ConnectionOptions {}
/* eslint-enabled @typescript-eslint/no-empty-interface */

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
