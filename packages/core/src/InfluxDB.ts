import WriteApi from './WriteApi'
import {ClientOptions, WritePrecision, WriteOptions} from './options'
import WriteApiImpl from './impl/WriteApiImpl'
import {IllegalArgumentError} from './errors'
import {Transport} from './transport'
// replaced by ./impl/browser/FetchTransport in browser builds
import TransportImpl from './impl/node/NodeHttpTransport'
import QueryApi from './QueryApi'
import QueryApiImpl from './impl/QueryApiImpl'

/**
 * InfluxDB 2.0 client that uses HTTP API described in https://v2.docs.influxdata.com/v2.0/reference/api/ .
 */
export default class InfluxDB {
  private _options: ClientOptions
  readonly transport: Transport

  /**
   * Creates influxdb client options from an options object or url.
   * @param options - client options
   */
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      this._options = {url: options}
    } else if (options !== null && typeof options === 'object') {
      this._options = options
    } else {
      throw new IllegalArgumentError('No url or configuration specified!')
    }
    const url = this._options.url
    if (typeof url !== 'string')
      throw new IllegalArgumentError('No url specified!')
    if (url.endsWith('/')) this._options.url = url.substring(0, url.length - 1)
    this.transport = this._options.transport || new TransportImpl(this._options)
  }

  /**
   * Creates [[WriteApi]] for the supplied organization and bucket. BEWARE that returned instances must be closed
   * in order to flush the remaining data and close already scheduled retry executions.
   *
   * @param org - Specifies the destination organization for writes. Takes either the ID or Name interchangeably.
   * @param bucket - The destination bucket for writes.
   * @param precision - Timestamp precision for line items.
   * @param writeOptions - Custom write options.
   * @returns WriteAPI instance
   */
  getWriteApi(
    org: string,
    bucket: string,
    precision: WritePrecision = WritePrecision.ns,
    writeOptions?: Partial<WriteOptions>
  ): WriteApi {
    return new WriteApiImpl(
      this.transport,
      org,
      bucket,
      precision,
      writeOptions || this._options.writeOptions
    )
  }

  /**
   * Creates [[QueryAPI]] for the supplied organization .
   *
   * @param org - organization
   * @returns query api instance
   */
  getQueryApi(org: string): QueryApi {
    return new QueryApiImpl(this.transport, org)
  }
}
