import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'
import {PasswordResetBody, User, UserResponse, Users} from './types'

export interface PostUsersIDPasswordRequest {
  /** The user ID. */
  userID: string
  auth?: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
export interface GetUsersRequest {
  /** The offset for pagination.
The number of records to skip.
 */
  offset?: number
  /** Limits the number of records returned. Default is `20`.
   */
  limit?: number
  /** Resource ID to seek from. Results are not inclusive of this ID. Use `after` instead of `offset`.
   */
  after?: string
  name?: string
  id?: string
}
export interface PostUsersRequest {
  /** The user to create. */
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
/**
 * Users API
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
   * Update a password.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostUsersIDPassword }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
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
  /**
   * List users.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetUsers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getUsers(
    request?: GetUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<Users> {
    return this.base.request(
      'GET',
      `/api/v2/users${this.base.queryString(request, [
        'offset',
        'limit',
        'after',
        'name',
        'id',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a user.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostUsers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postUsers(
    request: PostUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<UserResponse> {
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
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetUsersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getUsersID(
    request: GetUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<UserResponse> {
    return this.base.request(
      'GET',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a user.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PatchUsersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchUsersID(
    request: PatchUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<UserResponse> {
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
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteUsersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
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
}
