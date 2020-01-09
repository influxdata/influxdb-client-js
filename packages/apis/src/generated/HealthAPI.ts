import {APIBase, RequestOptions} from '../APIBase'
import {HealthCheck} from './types'

export interface GetHealthRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetHealth
 */
export class HealthAPI extends APIBase {
  /**
   * Creates HealthAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get the health of an instance.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetHealth
   */
  getHealth(
    request?: GetHealthRequest,
    requestOptions?: RequestOptions
  ): Promise<HealthCheck> {
    return this.request('GET', `/api/v2/health`, request, requestOptions)
  }
}
