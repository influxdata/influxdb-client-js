// this is effectively a clone of
import {
  InfluxDB,
  Transport,
  SendOptions,
  Headers,
} from '@influxdata/influxdb-client'

// used only in browser builds
declare function btoa(plain: string): string

export interface RequestOptions {
  /** HTTP request headers */
  headers?: {[key: string]: string}
  /**
   * Informs about a start of response processing.
   * @param headers - response HTTP headers
   * @param statusCode - response status code
   */
  responseStarted?: (headers: Headers, statusCode?: number) => void
}

function base64(value: string): string {
  return typeof btoa === 'function' // browser (window,worker) environment
    ? btoa(value)
    : Buffer.from(value, 'binary').toString('base64')
}
/**
 * Base class for all apis.
 */
export class APIBase {
  transport: Transport
  /**
   * Initializes transport to communicate with InfluxDB.
   * @param influxDB - the main InfluxDB client object
   */
  constructor(influxDB: InfluxDB) {
    if (!influxDB) throw new Error('No influxDB supplied!')
    if (!influxDB.transport) throw new Error('No transport supplied!')
    this.transport = influxDB.transport
  }

  queryString(request: any, params: string[]): string {
    if (request && params) {
      return params.reduce((acc, key) => {
        const val = request[key]
        if (val !== undefined && val !== null) {
          acc += acc ? '&' : '?'
          acc += encodeURIComponent(key) + '=' + encodeURIComponent(String(val))
        }
        return acc
      }, '')
    } else {
      return ''
    }
  }

  request(
    method: string,
    path: string,
    request: any = {},
    requestOptions?: RequestOptions,
    mediaType?: string
  ): Promise<any> {
    const sendOptions: SendOptions = {
      ...requestOptions,
      method,
    }
    if (mediaType) {
      ;(sendOptions.headers || (sendOptions.headers = {}))[
        'content-type'
      ] = mediaType
    }
    if (request.auth) {
      const value = `${request.auth.user}:${request.auth.password}`
      ;(sendOptions.headers || (sendOptions.headers = {}))[
        'authorization'
      ] = `Basic ${base64(value)}`
    }
    return this.transport.request(
      path,
      request.body ? request.body : '',
      sendOptions,
      requestOptions?.responseStarted
    )
  }
}
