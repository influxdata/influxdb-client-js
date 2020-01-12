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
  query: {
    offset?: number
    limit?: number
  }
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteUsersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutUsersIDPassword
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersIDLogs
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsers
   */
  getUsers(
    request?: GetUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<Users> {
    return this.request('GET', `/api/v2/users`, request, requestOptions)
  }
  /**
   * Create a user.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostUsers
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersID
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchUsersID
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteUsersID
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutUsersIDPassword
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetUsersIDLogs
   */
  getUsersIDLogs(
    request: GetUsersIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/users/${request.userID}/logs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
}
