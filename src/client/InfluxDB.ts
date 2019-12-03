import WriteApi from './WriteApi'
import {ClientOptions, WritePrecission} from './options'
import WriteApiImpl from './impl/WriteApiImpl'
import {parse} from 'url'
import {IllegalArgumentError} from './errors'
import {Transport} from './transport'
import NodeHttpTransport from './impl/NodeHttpTransport'

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
  constructor(url: string)
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
  getWriteApi(
    org: string,
    bucket: string,
    precission: WritePrecission = WritePrecission.ms
  ): WriteApi {
    return new WriteApiImpl(this.transport, org, bucket, precission)
  }
}
