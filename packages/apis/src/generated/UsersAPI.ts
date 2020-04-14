import {APIBase, RequestOptions} from '../APIBase'
import {OperationLogs, PasswordResetBody, User, Users} from './types'

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
export interface PutUsersIDPasswordRequest {
  /** The user ID. */
  userID: string
  auth: {user: string; password: string}
  /** New password */
  body: PasswordResetBody
}
export interface GetUsersIDLogsRequest {
  /** The user ID. */
  userID: string
  offset?: number
  limit?: number
}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteUsersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutUsersIDPassword
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersIDLogs
 */
export class UsersAPI extends APIBase {
  /**
   * Creates UsersAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all users.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
   * @param request
   * @return promise of response
   */
  getUsers(
    request?: GetUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<Users> {
    return this.request('GET', `/api/v2/users`, request, requestOptions)
  }
  /**
   * Create a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
   * @param request
   * @return promise of response
   */
  postUsers(
    request: PostUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.request(
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
   * @param request
   * @return promise of response
   */
  getUsersID(
    request: GetUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.request(
      'GET',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
   * @param request
   * @return promise of response
   */
  patchUsersID(
    request: PatchUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<User> {
    return this.request(
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
   * @param request
   * @return promise of response
   */
  deleteUsersID(
    request: DeleteUsersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a password.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutUsersIDPassword
   * @param request
   * @return promise of response
   */
  putUsersIDPassword(
    request: PutUsersIDPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PUT',
      `/api/v2/users/${request.userID}/password`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve operation logs for a user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersIDLogs
   * @param request
   * @return promise of response
   */
  getUsersIDLogs(
    request: GetUsersIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/users/${request.userID}/logs${this.queryString(request, [
        'offset',
        'limit',
      ])}`,
      request,
      requestOptions
    )
  }
}
