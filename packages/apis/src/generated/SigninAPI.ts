import {APIBase, RequestOptions} from '../APIBase'

export interface PostSigninRequest {
  auth: {user: string; password: string}
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignin
   */
  postSignin(
    request: PostSigninRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request('POST', `/api/v2/signin`, request, requestOptions)
  }
}
