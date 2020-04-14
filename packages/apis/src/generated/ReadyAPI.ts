import {APIBase, RequestOptions} from '../APIBase'
import {Ready} from './types'

export interface GetReadyRequest {}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
 */
export class ReadyAPI extends APIBase {
  /**
   * Creates ReadyAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get the readiness of an instance at startup.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
   * @param request
   * @return promise of response
   */
  getReady(
    request?: GetReadyRequest,
    requestOptions?: RequestOptions
  ): Promise<Ready> {
    return this.request('GET', `/ready`, request, requestOptions)
  }
}
