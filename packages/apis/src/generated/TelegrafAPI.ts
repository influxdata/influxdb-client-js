import {APIBase, RequestOptions} from '../APIBase'
import {TelegrafPlugins} from './types'

export interface GetTelegrafPluginsRequest {
  /** The type of plugin desired. */
  type?: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafPlugins
 */
export class TelegrafAPI extends APIBase {
  /**
   * Creates TelegrafAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafPlugins
   * @param request
   * @return promise of response
   */
  getTelegrafPlugins(
    request?: GetTelegrafPluginsRequest,
    requestOptions?: RequestOptions
  ): Promise<TelegrafPlugins> {
    return this.request(
      'GET',
      `/api/v2/telegraf/plugins${this.queryString(request, ['type'])}`,
      request,
      requestOptions
    )
  }
}
