import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Bucket,
  Buckets,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  OperationLogs,
  PostBucketRequest,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
} from './types'

export interface GetBucketsRequest {
  offset?: number
  limit?: number
  /** The organization name. */
  org?: string
  /** The organization ID. */
  orgID?: string
  /** Only returns buckets with a specific name. */
  name?: string
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
  body: Bucket
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
export interface GetBucketsIDLogsRequest {
  /** The bucket ID. */
  bucketID: string
  offset?: number
  limit?: number
}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBuckets
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBuckets
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLabels
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDLabels
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDLabelsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDMembers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDMembers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDMembersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDOwners
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDOwners
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDOwnersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLogs
 */
export class BucketsAPI extends APIBase {
  /**
   * Creates BucketsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all buckets.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBuckets
   * @param request
   * @return promise of response
   */
  getBuckets(
    request?: GetBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Buckets> {
    return this.request(
      'GET',
      `/api/v2/buckets${this.queryString(request, [
        'offset',
        'limit',
        'org',
        'orgID',
        'name',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBuckets
   * @param request
   * @return promise of response
   */
  postBuckets(
    request: PostBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.request(
      'POST',
      `/api/v2/buckets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsID
   * @param request
   * @return promise of response
   */
  getBucketsID(
    request: GetBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID
   * @param request
   * @return promise of response
   */
  patchBucketsID(
    request: PatchBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.request(
      'PATCH',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsID
   * @param request
   * @return promise of response
   */
  deleteBucketsID(
    request: DeleteBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLabels
   * @param request
   * @return promise of response
   */
  getBucketsIDLabels(
    request: GetBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDLabels
   * @param request
   * @return promise of response
   */
  postBucketsIDLabels(
    request: PostBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * delete a label from a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDLabelsID
   * @param request
   * @return promise of response
   */
  deleteBucketsIDLabelsID(
    request: DeleteBucketsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDMembers
   * @param request
   * @return promise of response
   */
  getBucketsIDMembers(
    request: GetBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDMembers
   * @param request
   * @return promise of response
   */
  postBucketsIDMembers(
    request: PostBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDMembersID
   * @param request
   * @return promise of response
   */
  deleteBucketsIDMembersID(
    request: DeleteBucketsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDOwners
   * @param request
   * @return promise of response
   */
  getBucketsIDOwners(
    request: GetBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDOwners
   * @param request
   * @return promise of response
   */
  postBucketsIDOwners(
    request: PostBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/buckets/${request.bucketID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDOwnersID
   * @param request
   * @return promise of response
   */
  deleteBucketsIDOwnersID(
    request: DeleteBucketsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${request.bucketID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for a bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLogs
   * @param request
   * @return promise of response
   */
  getBucketsIDLogs(
    request: GetBucketsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/buckets/${request.bucketID}/logs${this.queryString(request, [
        'offset',
        'limit',
      ])}`,
      request,
      requestOptions
    )
  }
}
