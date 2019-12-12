import WriteApi from './WriteApi'
import {ClientOptions, WritePrecision} from './options'
import WriteApiImpl from './impl/WriteApiImpl'
import {parse} from 'url'
import {IllegalArgumentError} from './errors'
import {Transport} from './transport'
import NodeHttpTransport from './impl/NodeHttpTransport'
import QueryApi from './QueryApi'
import QueryApiImpl from './impl/QueryApiImpl'

/**
 * Fills URL out into into a IClusterConfig object
 */
function fillOptions(
  url: string | undefined,
  options: {[key: string]: any}
): {[key: string]: any} {
  if (url) {
    const parsed = parse(url, true)
    options.url = url
    if (!options.token && parsed.query['token']) {
      options.token = parsed.query['token']
    }
  }
  return options
}

/**
 * Creates default transport using the connection options supplied.
 */
function createTransport(options: ClientOptions): Transport {
  return options.transport || new NodeHttpTransport(options)
}

/**
 * InfluxDB 2.0 client that uses HTTP API described in https://v2.docs.influxdata.com/v2.0/reference/api/ .
 */
export default class InfluxDB {
  private _options: ClientOptions
  private transport: Transport

  /* eslint-disable no-dupe-class-members */
  /**
   * Creates influxdb client from a string URL
   * @param url influxDB url, such as http://localhost:9999?token=my-token
   */
  constructor(url: string)
  /**
   * Creates influxdb client options from an options object.
   * @param options options
   */
  constructor(options: ClientOptions)

  constructor(options?: any) {
    if (typeof options === 'string') {
      this._options = fillOptions(options, {}) as ClientOptions
    } else if (options !== null && typeof options === 'object') {
      this._options = fillOptions(options.url, options) as ClientOptions
    } else {
      throw new IllegalArgumentError('No url or configuration specified!')
    }
    if (!this._options.url) throw new IllegalArgumentError('No url specified!')
    if (!this._options.token)
      throw new IllegalArgumentError('No token specified!')
    this.transport = createTransport(this._options)
  }
  /* eslint-enable no-dupe-class-members */

  /**
   * Creates [[WriteApi]] for the supplied organization and bucket.
   *
   * @param org Specifies the destination organization for writes. Takes either the ID or Name interchangeably.
   * @param bucket The destination bucket for writes.
   * @param precision Timestamp precision for line items.
   */
  getWriteApi(
    org: string,
    bucket: string,
    precision: WritePrecision = WritePrecision.ms
  ): WriteApi {
    return new WriteApiImpl(
      this.transport,
      org,
      bucket,
      precision,
      this._options
    )
  }

  /**
   * Creates [[QueryAPI]] for the supplied organization .
   *
   * @param org Specifies the organization for queries.
   * @return query api instance
   */
  getQueryApi(org: string): QueryApi {
    return new QueryApiImpl(this.transport, org)
  }
}
