import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Authorization,
  AuthorizationPostRequest,
  AuthorizationUpdateRequest,
  Authorizations,
} from './types'

export interface GetAuthorizationsRequest {
  /** A user ID.
Only returns authorizations scoped to this user.
 */
  userID?: string
  /** A user name.
Only returns authorizations scoped to this user.
 */
  user?: string
  /** An organization ID. Only returns authorizations that belong to this organization. */
  orgID?: string
  /** An organization name.
Only returns authorizations that belong to this organization.
 */
  org?: string
}
export interface PostAuthorizationsRequest {
  /** The authorization to create. */
  body: AuthorizationPostRequest
}
export interface GetAuthorizationsIDRequest {
  /** The ID of the authorization to get. */
  authID: string
}
export interface PatchAuthorizationsIDRequest {
  /** The ID of the authorization to update. */
  authID: string
  /** Authorization to update */
  body: AuthorizationUpdateRequest
}
export interface DeleteAuthorizationsIDRequest {
  /** The ID of the authorization to delete. */
  authID: string
}
/**
 * Authorizations API
 */
export class AuthorizationsAPI {
  // internal
  private base: APIBase

  /**
   * Creates AuthorizationsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List authorizations.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetAuthorizations }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getAuthorizations(
    request?: GetAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorizations> {
    return this.base.request(
      'GET',
      `/api/v2/authorizations${this.base.queryString(request, [
        'userID',
        'user',
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create an authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostAuthorizations }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postAuthorizations(
    request: PostAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'POST',
      `/api/v2/authorizations`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve an authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getAuthorizationsID(
    request: GetAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'GET',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update an authorization to be active or inactive.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PatchAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchAuthorizationsID(
    request: PatchAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'PATCH',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete an authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteAuthorizationsID(
    request: DeleteAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
}
