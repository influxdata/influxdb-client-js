import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {PasswordResetBody, User} from './types'

export interface GetMeRequest {}
export interface PutMePasswordRequest {
  auth: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetMe
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutMePassword
 */
export class MeAPI extends APIBase {
  /**
   * Creates MeAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Return the current authenticated user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetMe
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getMe(
    request?: GetMeRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.request('GET', `/api/v2/me`, request, requestOptions)
  }
  /**
   * Update a password.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutMePassword
   * @param request - request parameters and body (if supported)
   * @returns promise of response
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
