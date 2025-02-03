import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostSignoutRequest {}
/**
 * Signout API
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
   * Expire the current UI session.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostSignout }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postSignout(
    request?: PostSignoutRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('POST', `/api/v2/signout`, request, requestOptions)
  }
}
