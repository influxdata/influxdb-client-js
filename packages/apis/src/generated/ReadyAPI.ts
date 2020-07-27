import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Ready} from './types'

export interface GetReadyRequest {}
/**
 * Ready API
 */
export class ReadyAPI {
  // internal
  private base: APIBase

  /**
   * Creates ReadyAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Get the readiness of an instance at startup.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getReady(
    request?: GetReadyRequest,
    requestOptions?: RequestOptions
  ): Promise<Ready> {
    return this.base.request('GET', `/ready`, request, requestOptions)
  }
}
