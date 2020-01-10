import {APIBase, RequestOptions} from '../APIBase'
import {PasswordResetBody, User} from './types'

export interface GetMeRequest {}
export interface PutMePasswordRequest {
  auth: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetMe
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutMePassword
 */
export class MeAPI extends APIBase {
  /**
   * Creates MeAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Return the current authenticated user.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetMe
   */
  getMe(
    request?: GetMeRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.request('GET', `/api/v2/me`, request, requestOptions)
  }
  /**
   * Update a password.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutMePassword
   */
  putMePassword(
    request: PutMePasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PUT',
      `/api/v2/me/password`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
