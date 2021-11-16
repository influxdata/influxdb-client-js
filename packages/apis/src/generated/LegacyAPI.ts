import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Authorization,
  AuthorizationUpdateRequest,
  Authorizations,
  LegacyAuthorizationPostRequest,
  PasswordResetBody,
} from './types'

export interface GetLegacyAuthorizationsRequest {
  /** Only show legacy authorizations that belong to a user ID. */
  userID?: string
  /** Only show legacy authorizations that belong to a user name. */
  user?: string
  /** Only show legacy authorizations that belong to an organization ID. */
  orgID?: string
  /** Only show legacy authorizations that belong to a organization name. */
  org?: string
  /** Only show legacy authorizations with a specified token (auth name). */
  token?: string
  /** Only show legacy authorizations with a specified auth ID. */
  authID?: string
}
export interface PostLegacyAuthorizationsRequest {
  /** Legacy authorization to create */
  body: LegacyAuthorizationPostRequest
}
export interface GetLegacyAuthorizationsIDRequest {
  /** The ID of the legacy authorization to get. */
  authID: string
}
export interface PatchLegacyAuthorizationsIDRequest {
  /** The ID of the legacy authorization to update. */
  authID: string
  /** Legacy authorization to update */
  body: AuthorizationUpdateRequest
}
export interface DeleteLegacyAuthorizationsIDRequest {
  /** The ID of the legacy authorization to delete. */
  authID: string
}
export interface PostLegacyAuthorizationsIDPasswordRequest {
  /** The ID of the legacy authorization to update. */
  authID: string
  /** New password */
  body: PasswordResetBody
}
/**
 * Legacy API
 */
export class LegacyAPI {
  // internal
  private base: APIBase

  /**
   * Creates LegacyAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all legacy authorizations.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetLegacyAuthorizations }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getLegacyAuthorizations(
    request?: GetLegacyAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorizations> {
    return this.base.request(
      'GET',
      `/api/v2/legacy/authorizations${this.base.queryString(request, [
        'userID',
        'user',
        'orgID',
        'org',
        'token',
        'authID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a legacy authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostLegacyAuthorizations }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postLegacyAuthorizations(
    request: PostLegacyAuthorizationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'POST',
      `/api/v2/legacy/authorizations`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a legacy authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetLegacyAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getLegacyAuthorizationsID(
    request: GetLegacyAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'GET',
      `/api/v2/legacy/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a legacy authorization to be active or inactive.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PatchLegacyAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchLegacyAuthorizationsID(
    request: PatchLegacyAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Authorization> {
    return this.base.request(
      'PATCH',
      `/api/v2/legacy/authorizations/${request.authID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a legacy authorization.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/DeleteLegacyAuthorizationsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteLegacyAuthorizationsID(
    request: DeleteLegacyAuthorizationsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/legacy/authorizations/${request.authID}`,
      request,
      requestOptions
    )
  }
  /**
   * Set a legacy authorization password.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostLegacyAuthorizationsIDPassword }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postLegacyAuthorizationsIDPassword(
    request: PostLegacyAuthorizationsIDPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/legacy/authorizations/${request.authID}/password`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
