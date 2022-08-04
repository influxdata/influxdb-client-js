import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface GetMetricsRequest {}
/**
 * Metrics API
 */
export class MetricsAPI {
  // internal
  private base: APIBase

  /**
   * Creates MetricsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Retrieve workload performance metrics.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetMetrics }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getMetrics(
    request?: GetMetricsRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request('GET', `/api/v2/metrics`, request, requestOptions)
  }
}
