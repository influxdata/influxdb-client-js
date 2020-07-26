import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {TelegrafPlugins} from './types'

export interface GetTelegrafPluginsRequest {
  /** The type of plugin desired. */
  type?: string
}
/**
 * See
 *- {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafPlugins }
 */
export class TelegrafAPI {
  // internal
  private base: APIBase

  /**
   * Creates TelegrafAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafPlugins }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafPlugins(
    request?: GetTelegrafPluginsRequest,
    requestOptions?: RequestOptions
  ): Promise<TelegrafPlugins> {
    return this.base.request(
      'GET',
      `/api/v2/telegraf/plugins${this.base.queryString(request, ['type'])}`,
      request,
      requestOptions
    )
  }
}
