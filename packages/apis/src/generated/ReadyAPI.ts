import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Ready} from './types'

export interface GetReadyRequest {}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
 */
export class ReadyAPI extends APIBase {
  /**
   * Creates ReadyAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Get the readiness of an instance at startup.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getReady(
    request?: GetReadyRequest,
    requestOptions?: RequestOptions
  ): Promise<Ready> {
    return this.request('GET', `/ready`, request, requestOptions)
  }
}
