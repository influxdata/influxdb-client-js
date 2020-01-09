import {APIBase, RequestOptions} from '../APIBase'
import {Ready} from './types'

export interface GetReadyRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetReady
   */
  getReady(
    request?: GetReadyRequest,
    requestOptions?: RequestOptions
  ): Promise<Ready> {
    return this.request('GET', `/api/v2/ready`, request, requestOptions)
  }
}
