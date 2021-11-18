import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostSigninRequest {
  auth: {user: string; password: string}
}
/**
 * Signin API
 */
export class SigninAPI {
  // internal
  private base: APIBase

  /**
   * Creates SigninAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Create a user session.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostSignin }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postSignin(
    request: PostSigninRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('POST', `/api/v2/signin`, request, requestOptions)
  }
}
