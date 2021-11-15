import WriteApi from './WriteApi'
import {ClientOptions, WriteOptions, WritePrecisionType} from './options'
import WriteApiImpl from './impl/WriteApiImpl'
import {IllegalArgumentError} from './errors'
import {Transport} from './transport'
// replaced by ./impl/browser/FetchTransport in browser builds
import TransportImpl from './impl/node/NodeHttpTransport'
import QueryApi, {QueryOptions} from './QueryApi'
import QueryApiImpl from './impl/QueryApiImpl'
import {AnnotatedCSVResponse, APIExecutor} from './results'
import {AnnotatedCSVResponseImpl} from './results/AnnotatedCSVResponseImpl'

/**
 * InfluxDB 2.0 entry point that configures communication with InfluxDB server
 * and provide APIs to write and query data.
 */
export default class InfluxDB {
  private _options: ClientOptions
  readonly transport: Transport
  readonly processCSVResponse: (executor: APIExecutor) => AnnotatedCSVResponse

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
    this.transport = this._options.transport ?? new TransportImpl(this._options)
    this.processCSVResponse = (executor: APIExecutor): AnnotatedCSVResponse =>
      new AnnotatedCSVResponseImpl(executor, this.transport.chunkCombiner)
  }

  /**
   * Creates WriteApi for the supplied organization and bucket. BEWARE that returned instances must be closed
   * in order to flush the remaining data and close already scheduled retry executions.
   *
   * @remarks
   * Inspect the {@link WriteOptions} to control also advanced options, such retries of failure, retry strategy options, data chunking
   * and flushing windows. See {@link DEFAULT_WriteOptions} to see the defaults.
   *
   * See also {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/write.js | write.js example},
   * {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/writeAdvanced.js | writeAdvanced.js example},
   * and {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/index.html | browser example}.
   *
   * @param org - Specifies the destination organization for writes. Takes either the ID or Name interchangeably.
   * @param bucket - The destination bucket for writes.
   * @param precision - Timestamp precision for line items.
   * @param writeOptions - Custom write options.
   * @returns WriteApi instance
   */
  getWriteApi(
    org: string,
    bucket: string,
    precision: WritePrecisionType = 'ns',
    writeOptions?: Partial<WriteOptions>
  ): WriteApi {
    return new WriteApiImpl(
      this.transport,
      org,
      bucket,
      precision,
      writeOptions ?? this._options.writeOptions
    )
  }

  /**
   * Creates QueryApi for the supplied organization .
   *
   * @remarks
   * See also {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/query.ts | query.ts example},
   * {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/queryWithParams.ts | queryWithParams.ts example},
   * {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/rxjs-query.ts | rxjs-query.ts example},
   * and {@link https://github.com/influxdata/influxdb-client-js/blob/master/examples/index.html | browser example},
   *
   * @param org - organization or query options
   * @returns QueryApi instance
   */
  getQueryApi(org: string | QueryOptions): QueryApi {
    return new QueryApiImpl(this.transport, this.processCSVResponse, org)
  }
}
