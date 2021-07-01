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
  ScraperTargetRequest,
  ScraperTargetResponse,
  ScraperTargetResponses,
} from './types'

export interface GetScrapersRequest {
  /** Specifies the name of the scraper target. */
  name?: string
  /** List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used. */
  id?: any
  /** Specifies the organization ID of the scraper target. */
  orgID?: string
  /** Specifies the organization name of the scraper target. */
  org?: string
}
export interface PostScrapersRequest {
  /** Scraper target to create */
  body: ScraperTargetRequest
}
export interface GetScrapersIDRequest {
  /** The identifier of the scraper target. */
  scraperTargetID: string
}
export interface PatchScrapersIDRequest {
  /** The identifier of the scraper target. */
  scraperTargetID: string
  /** Scraper target update to apply */
  body: ScraperTargetRequest
}
export interface DeleteScrapersIDRequest {
  /** The identifier of the scraper target. */
  scraperTargetID: string
}
export interface GetScrapersIDLabelsRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDLabelsRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteScrapersIDLabelsIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** The label ID. */
  labelID: string
}
export interface GetScrapersIDMembersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDMembersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteScrapersIDMembersIDRequest {
  /** The ID of member to remove. */
  userID: string
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface GetScrapersIDOwnersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDOwnersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteScrapersIDOwnersIDRequest {
  /** The ID of owner to remove. */
  userID: string
  /** The scraper target ID. */
  scraperTargetID: string
}
/**
 * Scrapers API
 */
export class ScrapersAPI {
  // internal
  private base: APIBase

  /**
   * Creates ScrapersAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all scraper targets.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScrapers(
    request?: GetScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponses> {
    return this.base.request(
      'GET',
      `/api/v2/scrapers${this.base.queryString(request, [
        'name',
        'id',
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScrapers(
    request: PostScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.base.request(
      'POST',
      `/api/v2/scrapers`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScrapersID(
    request: GetScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.base.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchScrapersID(
    request: PatchScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.base.request(
      'PATCH',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteScrapersID(
    request: DeleteScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScrapersIDLabels(
    request: GetScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScrapersIDLabels(
    request: PostScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteScrapersIDLabelsID(
    request: DeleteScrapersIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScrapersIDMembers(
    request: GetScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScrapersIDMembers(
    request: PostScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteScrapersIDMembersID(
    request: DeleteScrapersIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScrapersIDOwners(
    request: GetScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScrapersIDOwners(
    request: PostScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a scraper target.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteScrapersIDOwnersID(
    request: DeleteScrapersIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
