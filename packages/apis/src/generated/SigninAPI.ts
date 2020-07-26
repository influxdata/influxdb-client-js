import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostSigninRequest {
  auth: {user: string; password: string}
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
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
   * Exchange basic auth credentials for session.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postSignin(
    request: PostSigninRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('POST', `/api/v2/signin`, request, requestOptions)
  }
}
