import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Config} from './types'

export interface GetConfigRequest {}
/**
 * Config API
 */
export class ConfigAPI {
  // internal
  private base: APIBase

  /**
   * Creates ConfigAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Retrieve runtime configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetConfig }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getConfig(
    request?: GetConfigRequest,
    requestOptions?: RequestOptions
  ): Promise<Config> {
    return this.base.request('GET', `/api/v2/config`, request, requestOptions)
  }
}
