import {APIBase, RequestOptions} from '../APIBase'
import {
  Authorization,
  AuthorizationUpdateRequest,
  Authorizations,
} from './types'

export interface GetAuthorizationsRequest {
  /** Only show authorizations that belong to a user ID. */
  userID?: string
  /** Only show authorizations that belong to a user name. */
  user?: string
  /** Only show authorizations that belong to an organization ID. */
  orgID?: string
  /** Only show authorizations that belong to a organization name. */
  org?: string
}
export interface PostAuthorizationsRequest {
  /** Authorization to create */
  body: Authorization
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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetAuthorizations
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostAuthorizations
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetAuthorizationsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchAuthorizationsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteAuthorizationsID
 */
export class AuthorizationsAPI extends APIBase {
  /**
   * Creates AuthorizationsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all authorizations.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetAuthorizations
   * @param request
   * @return promise of response
   */
  getAuthorizations(
    request?: GetAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorizations> {
    return this.request(
      'GET',
      `/api/v2/authorizations${this.queryString(request, [
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostAuthorizations
   * @param request
   * @return promise of response
   */
  postAuthorizations(
    request: PostAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.request(
      'POST',
      `/api/v2/authorizations`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve an authorization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetAuthorizationsID
   * @param request
   * @return promise of response
   */
  getAuthorizationsID(
    request: GetAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.request(
      'GET',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update an authorization to be active or inactive.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchAuthorizationsID
   * @param request
   * @return promise of response
   */
  patchAuthorizationsID(
    request: PatchAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.request(
      'PATCH',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a authorization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteAuthorizationsID
   * @param request
   * @return promise of response
   */
  deleteAuthorizationsID(
    request: DeleteAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
}
