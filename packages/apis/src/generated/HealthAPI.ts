import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {HealthCheck} from './types'

export interface GetHealthRequest {}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetHealth
 */
export class HealthAPI extends APIBase {
  /**
   * Creates HealthAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Get the health of an instance.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetHealth
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getHealth(
    request?: GetHealthRequest,
    requestOptions?: RequestOptions
  ): Promise<HealthCheck> {
    return this.request('GET', `/health`, request, requestOptions)
  }
}
