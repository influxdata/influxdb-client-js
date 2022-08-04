import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {PasswordResetBody, UserResponse} from './types'

export interface GetMeRequest {}
export interface PutMePasswordRequest {
  auth?: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
/**
 * Me API
 */
export class MeAPI {
  // internal
  private base: APIBase

  /**
   * Creates MeAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Retrieve the currently authenticated user.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetMe }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getMe(
    request?: GetMeRequest,
    requestOptions?: RequestOptions
  ): Promise<UserResponse> {
    return this.base.request('GET', `/api/v2/me`, request, requestOptions)
  }
  /**
   * Update a password.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PutMePassword }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putMePassword(
    request: PutMePasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'PUT',
      `/api/v2/me/password`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
