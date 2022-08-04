import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface GetPingRequest {}
/**
 * Ping API
 */
export class PingAPI {
  // internal
  private base: APIBase

  /**
   * Creates PingAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Get the status and version of the instance.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetPing }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getPing(
    request?: GetPingRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('GET', `/ping`, request, requestOptions)
  }
}
