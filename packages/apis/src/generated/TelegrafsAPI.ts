import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  Telegraf,
  TelegrafPluginRequest,
  Telegrafs,
} from './types'

export interface GetTelegrafsRequest {
  /** The organization ID the Telegraf config belongs to. */
  orgID?: string
}
export interface PostTelegrafsRequest {
  /** Telegraf configuration to create */
  body: TelegrafPluginRequest
}
export interface GetTelegrafsIDRequest {
  /** The Telegraf configuration ID. */
  telegrafID: string
}
export interface PutTelegrafsIDRequest {
  /** The Telegraf config ID. */
  telegrafID: string
  /** Telegraf configuration update to apply */
  body: TelegrafPluginRequest
}
export interface DeleteTelegrafsIDRequest {
  /** The Telegraf configuration ID. */
  telegrafID: string
}
export interface GetTelegrafsIDLabelsRequest {
  /** The Telegraf config ID. */
  telegrafID: string
}
export interface PostTelegrafsIDLabelsRequest {
  /** The Telegraf config ID. */
  telegrafID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteTelegrafsIDLabelsIDRequest {
  /** The Telegraf config ID. */
  telegrafID: string
  /** The label ID. */
  labelID: string
}
export interface GetTelegrafsIDMembersRequest {
  /** The Telegraf config ID. */
  telegrafID: string
}
export interface PostTelegrafsIDMembersRequest {
  /** The Telegraf config ID. */
  telegrafID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteTelegrafsIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The Telegraf config ID. */
  telegrafID: string
}
export interface GetTelegrafsIDOwnersRequest {
  /** The Telegraf configuration ID. */
  telegrafID: string
}
export interface PostTelegrafsIDOwnersRequest {
  /** The Telegraf configuration ID. */
  telegrafID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteTelegrafsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The Telegraf config ID. */
  telegrafID: string
}
/**
 * Telegrafs API
 */
export class TelegrafsAPI {
  // internal
  private base: APIBase

  /**
   * Creates TelegrafsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all Telegraf configurations.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTelegrafs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafs(
    request?: GetTelegrafsRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegrafs> {
    return this.base.request(
      'GET',
      `/api/v2/telegrafs${this.base.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostTelegrafs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTelegrafs(
    request: PostTelegrafsRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegraf> {
    return this.base.request(
      'POST',
      `/api/v2/telegrafs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTelegrafsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafsID(
    request: GetTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PutTelegrafsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putTelegrafsID(
    request: PutTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegraf> {
    return this.base.request(
      'PUT',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/DeleteTelegrafsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTelegrafsID(
    request: DeleteTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTelegrafsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafsIDLabels(
    request: GetTelegrafsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostTelegrafsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTelegrafsIDLabels(
    request: PostTelegrafsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/DeleteTelegrafsIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTelegrafsIDLabelsID(
    request: DeleteTelegrafsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTelegrafsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafsIDMembers(
    request: GetTelegrafsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostTelegrafsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTelegrafsIDMembers(
    request: PostTelegrafsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/DeleteTelegrafsIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTelegrafsIDMembersID(
    request: DeleteTelegrafsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTelegrafsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTelegrafsIDOwners(
    request: GetTelegrafsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a Telegraf configuration.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostTelegrafsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTelegrafsIDOwners(
    request: PostTelegrafsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a Telegraf config.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/DeleteTelegrafsIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTelegrafsIDOwnersID(
    request: DeleteTelegrafsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
