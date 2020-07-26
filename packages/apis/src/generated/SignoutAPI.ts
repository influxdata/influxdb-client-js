import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostSignoutRequest {}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
 */
export class SignoutAPI {
  // internal
  private base: APIBase

  /**
   * Creates SignoutAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Expire the current session.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postSignout(
    request?: PostSignoutRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('POST', `/api/v2/signout`, request, requestOptions)
  }
}
