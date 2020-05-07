import WriteApi from './WriteApi'
import {ClientOptions, WritePrecision} from './options'
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
   * @param options options
   */
  constructor(options: ClientOptions | string) {
    if (typeof options === 'string') {
      this._options = {url: options}
    } else if (options !== null && typeof options === 'object') {
      this._options = options
    } else {
      throw new IllegalArgumentError('No url or configuration specified!')
    }
    if (this._options.url === undefined)
      throw new IllegalArgumentError('No url specified!')
    // eslint-disable-next-line prefer-const
    let [path, query = ''] = this._options.url.split('?')
    if (path.endsWith('/')) {
      path = path.slice(0, -1)
    }
    this._options.url = `${path}${query ? `?${query}` : ''}`
    this.transport = this._options.transport || new TransportImpl(this._options)
  }

  /**
   * Creates [[WriteApi]] for the supplied organization and bucket. BEWARE that returned instances must be closed
   * in order to flush the remaining data and close already scheduled retry executions.
   *
   * @param org Specifies the destination organization for writes. Takes either the ID or Name interchangeably.
   * @param bucket The destination bucket for writes.
   * @param precision Timestamp precision for line items.
   */
  getWriteApi(
    org: string,
    bucket: string,
    precision: WritePrecision = WritePrecision.ns
  ): WriteApi {
    return new WriteApiImpl(
      this.transport,
      org,
      bucket,
      precision,
      this._options.writeOptions
    )
  }

  /**
   * Creates [[QueryAPI]] for the supplied organization .
   *
   * @param org organization
   * @return query api instance
   */
  getQueryApi(org: string): QueryApi {
    return new QueryApiImpl(this.transport, org)
  }
}
