import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Label,
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
  query: {
    /** Specifies the name of the scraper target. */
    name?: string
    /** List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used. */
    id?: any
    /** Specifies the organization ID of the scraper target. */
    orgID?: string
    /** Specifies the organization name of the scraper target. */
    org?: string
  }
}
export interface PostScrapersRequest {
  /** Scraper target to create */
  body: ScraperTargetRequest
}
export interface GetScrapersIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PatchScrapersIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** Scraper target update to apply */
  body: ScraperTargetRequest
}
export interface DeleteScrapersIDRequest {
  /** The scraper target ID. */
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
export interface PatchScrapersIDLabelsIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** The label ID. */
  labelID: string
  /** Label update to apply */
  body: Label
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
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDMembersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDOwnersID
 */
export class ScrapersAPI extends APIBase {
  /**
   * Creates ScrapersAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all scraper targets.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapers
   */
  getScrapers(
    request?: GetScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponses> {
    return this.request(
      'GET',
      `/api/v2/scrapers${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapers
   */
  postScrapers(
    request: PostScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'POST',
      `/api/v2/scrapers`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a scraper target by ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersID
   */
  getScrapersID(
    request: GetScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersID
   */
  patchScrapersID(
    request: PatchScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'PATCH',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersID
   */
  deleteScrapersID(
    request: DeleteScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDLabels
   */
  getScrapersIDLabels(
    request: GetScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDLabels
   */
  postScrapersIDLabels(
    request: PostScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a label on a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersIDLabelsID
   */
  patchScrapersIDLabelsID(
    request: PatchScrapersIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PATCH',
      `/api/v2/scrapers/${request.scraperTargetID}/labels/${request.labelID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDLabelsID
   */
  deleteScrapersIDLabelsID(
    request: DeleteScrapersIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDMembers
   */
  getScrapersIDMembers(
    request: GetScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDMembers
   */
  postScrapersIDMembers(
    request: PostScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDMembersID
   */
  deleteScrapersIDMembersID(
    request: DeleteScrapersIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDOwners
   */
  getScrapersIDOwners(
    request: GetScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDOwners
   */
  postScrapersIDOwners(
    request: PostScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a scraper target.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDOwnersID
   */
  deleteScrapersIDOwnersID(
    request: DeleteScrapersIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
