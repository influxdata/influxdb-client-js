import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Bucket,
  Buckets,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  PatchBucketRequest,
  PostBucketRequest,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
} from './types'

export interface GetBucketsRequest {
  offset?: number
  limit?: number
  /** The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.
   */
  after?: string
  /** The name of the organization. */
  org?: string
  /** The organization ID. */
  orgID?: string
  /** Only returns buckets with a specific name. */
  name?: string
  /** Only returns buckets with a specific ID. */
  id?: string
}
export interface PostBucketsRequest {
  /** Bucket to create */
  body: PostBucketRequest
}
export interface GetBucketsIDRequest {
  /** The bucket ID. */
  bucketID: string
}
export interface PatchBucketsIDRequest {
  /** The bucket ID. */
  bucketID: string
  /** Bucket update to apply */
  body: PatchBucketRequest
}
export interface DeleteBucketsIDRequest {
  /** The ID of the bucket to delete. */
  bucketID: string
}
export interface GetBucketsIDLabelsRequest {
  /** The bucket ID. */
  bucketID: string
}
export interface PostBucketsIDLabelsRequest {
  /** The bucket ID. */
  bucketID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteBucketsIDLabelsIDRequest {
  /** The bucket ID. */
  bucketID: string
  /** The ID of the label to delete. */
  labelID: string
}
export interface GetBucketsIDMembersRequest {
  /** The bucket ID. */
  bucketID: string
}
export interface PostBucketsIDMembersRequest {
  /** The bucket ID. */
  bucketID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteBucketsIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The bucket ID. */
  bucketID: string
}
export interface GetBucketsIDOwnersRequest {
  /** The bucket ID. */
  bucketID: string
}
export interface PostBucketsIDOwnersRequest {
  /** The bucket ID. */
  bucketID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteBucketsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The bucket ID. */
  bucketID: string
}
/**
 * Buckets API
 */
export class BucketsAPI {
  // internal
  private base: APIBase

  /**
   * Creates BucketsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all buckets.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBuckets }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBuckets(
    request?: GetBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Buckets> {
    return this.base.request(
      'GET',
      `/api/v2/buckets${this.base.queryString(request, [
        'offset',
        'limit',
        'after',
        'org',
        'orgID',
        'name',
        'id',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostBuckets }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postBuckets(
    request: PostBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.base.request(
      'POST',
      `/api/v2/buckets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBucketsID(
    request: GetBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.base.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchBucketsID(
    request: PatchBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.base.request(
      'PATCH',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteBucketsID(
    request: DeleteBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBucketsIDLabels(
    request: GetBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postBucketsIDLabels(
    request: PostBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteBucketsIDLabelsID(
    request: DeleteBucketsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBucketsIDMembers(
    request: GetBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postBucketsIDMembers(
    request: PostBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteBucketsIDMembersID(
    request: DeleteBucketsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBucketsIDOwners(
    request: GetBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postBucketsIDOwners(
    request: PostBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteBucketsIDOwnersID(
    request: DeleteBucketsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
