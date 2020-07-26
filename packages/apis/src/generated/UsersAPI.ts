import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {PasswordResetBody, User, Users} from './types'

export interface GetUsersRequest {}
export interface PostUsersRequest {
  /** User to create */
  body: User
}
export interface GetUsersIDRequest {
  /** The user ID. */
  userID: string
}
export interface PatchUsersIDRequest {
  /** The ID of the user to update. */
  userID: string
  /** User update to apply */
  body: User
}
export interface DeleteUsersIDRequest {
  /** The ID of the user to delete. */
  userID: string
}
export interface PostUsersIDPasswordRequest {
  /** The user ID. */
  userID: string
  auth: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteUsersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsersIDPassword
 */
export class UsersAPI {
  // internal
  private base: APIBase

  /**
   * Creates UsersAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all users.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getUsers(
    request?: GetUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<Users> {
    return this.base.request('GET', `/api/v2/users`, request, requestOptions)
  }
  /**
   * Create a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postUsers(
    request: PostUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.base.request(
      'POST',
      `/api/v2/users`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getUsersID(
    request: GetUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.base.request(
      'GET',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  patchUsersID(
    request: PatchUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.base.request(
      'PATCH',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteUsersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteUsersID(
    request: DeleteUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a password.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsersIDPassword
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postUsersIDPassword(
    request: PostUsersIDPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/users/${request.userID}/password`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
