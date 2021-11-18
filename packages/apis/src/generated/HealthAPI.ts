import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {HealthCheck} from './types'

export interface GetHealthRequest {}
/**
 * Health API
 */
export class HealthAPI {
  // internal
  private base: APIBase

  /**
   * Creates HealthAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Get the health of an instance.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetHealth }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getHealth(
    request?: GetHealthRequest,
    requestOptions?: RequestOptions
  ): Promise<HealthCheck> {
    return this.base.request('GET', `/health`, request, requestOptions)
  }
}
