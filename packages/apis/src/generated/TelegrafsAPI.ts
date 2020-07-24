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
  TelegrafRequest,
  Telegrafs,
} from './types'

export interface GetTelegrafsRequest {
  /** The organization ID the Telegraf config belongs to. */
  orgID?: string
}
export interface PostTelegrafsRequest {
  /** Telegraf config to create */
  body: TelegrafRequest
}
export interface GetTelegrafsIDRequest {
  /** The Telegraf config ID. */
  telegrafID: string
}
export interface PutTelegrafsIDRequest {
  /** The Telegraf config ID. */
  telegrafID: string
  /** Telegraf config update to apply */
  body: TelegrafRequest
}
export interface DeleteTelegrafsIDRequest {
  /** The Telegraf config ID. */
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
  /** The Telegraf config ID. */
  telegrafID: string
}
export interface PostTelegrafsIDOwnersRequest {
  /** The Telegraf config ID. */
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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutTelegrafsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDMembersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDOwnersID
 */
export class TelegrafsAPI extends APIBase {
  /**
   * Creates TelegrafsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafs
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getTelegrafs(
    request?: GetTelegrafsRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegrafs> {
    return this.request(
      'GET',
      `/api/v2/telegrafs${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafs
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postTelegrafs(
    request: PostTelegrafsRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegraf> {
    return this.request(
      'POST',
      `/api/v2/telegrafs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getTelegrafsID(
    request: GetTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutTelegrafsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  putTelegrafsID(
    request: PutTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Telegraf> {
    return this.request(
      'PUT',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteTelegrafsID(
    request: DeleteTelegrafsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getTelegrafsIDLabels(
    request: GetTelegrafsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postTelegrafsIDLabels(
    request: PostTelegrafsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDLabelsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteTelegrafsIDLabelsID(
    request: DeleteTelegrafsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDMembers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getTelegrafsIDMembers(
    request: GetTelegrafsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDMembers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postTelegrafsIDMembers(
    request: PostTelegrafsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDMembersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteTelegrafsIDMembersID(
    request: DeleteTelegrafsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTelegrafsIDOwners
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getTelegrafsIDOwners(
    request: GetTelegrafsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/telegrafs/${request.telegrafID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTelegrafsIDOwners
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postTelegrafsIDOwners(
    request: PostTelegrafsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/telegrafs/${request.telegrafID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a Telegraf config.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTelegrafsIDOwnersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteTelegrafsIDOwnersID(
    request: DeleteTelegrafsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/telegrafs/${request.telegrafID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
