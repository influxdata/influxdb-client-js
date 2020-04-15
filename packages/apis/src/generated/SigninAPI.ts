import {APIBase, RequestOptions} from '../APIBase'

export interface PostSigninRequest {
  auth: {user: string; password: string}
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
 */
export class SigninAPI extends APIBase {
  /**
   * Creates SigninAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Exchange basic auth credentials for session.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
   * @param request
   * @return promise of response
   */
  postSignin(
    request: PostSigninRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request('POST', `/api/v2/signin`, request, requestOptions)
  }
}
