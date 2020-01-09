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
  query: {
    offset?: number
    limit?: number
    /** The organization name. */
    org?: string
    /** The organization ID. */
    orgID?: string
    /** Only returns buckets with a specific name. */
    name?: string
  }
}
export interface PostBucketsRequest {
  /** Bucket to create */
  body: PostBucketRequest
}
export interface GetBucketsIDRequest {}
export interface PatchBucketsIDRequest {
  /** Bucket update to apply */
  body: Bucket
}
export interface DeleteBucketsIDRequest {}
export interface GetBucketsIDLabelsRequest {}
export interface PostBucketsIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteBucketsIDLabelsIDRequest {}
export interface GetBucketsIDMembersRequest {}
export interface PostBucketsIDMembersRequest {
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteBucketsIDMembersIDRequest {}
export interface GetBucketsIDOwnersRequest {}
export interface PostBucketsIDOwnersRequest {
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteBucketsIDOwnersIDRequest {}
export interface GetBucketsIDLogsRequest {
  query: {
    offset?: number
    limit?: number
  }
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBuckets
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBuckets
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDMembersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDOwnersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLogs
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBuckets
   */
  getBuckets(
    request?: GetBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Buckets> {
    return this.request(
      'GET',
      `/api/v2/buckets${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a bucket.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBuckets
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
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsID
   */
  getBucketsID(
    bucketID: string,
    request?: GetBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.request(
      'GET',
      `/api/v2/buckets/${bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID
   */
  patchBucketsID(
    bucketID: string,
    request: PatchBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Bucket> {
    return this.request(
      'PATCH',
      `/api/v2/buckets/${bucketID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a bucket.
   * @param bucketID The ID of the bucket to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsID
   */
  deleteBucketsID(
    bucketID: string,
    request?: DeleteBucketsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${bucketID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLabels
   */
  getBucketsIDLabels(
    bucketID: string,
    request?: GetBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/buckets/${bucketID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDLabels
   */
  postBucketsIDLabels(
    bucketID: string,
    request: PostBucketsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/buckets/${bucketID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * delete a label from a bucket.
   * @param bucketID The bucket ID.
   * @param labelID The ID of the label to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDLabelsID
   */
  deleteBucketsIDLabelsID(
    bucketID: string,
    labelID: string,
    request?: DeleteBucketsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${bucketID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDMembers
   */
  getBucketsIDMembers(
    bucketID: string,
    request?: GetBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/buckets/${bucketID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDMembers
   */
  postBucketsIDMembers(
    bucketID: string,
    request: PostBucketsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/buckets/${bucketID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a bucket.
   * @param userID The ID of the member to remove.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDMembersID
   */
  deleteBucketsIDMembersID(
    userID: string,
    bucketID: string,
    request?: DeleteBucketsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${bucketID}/members/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDOwners
   */
  getBucketsIDOwners(
    bucketID: string,
    request?: GetBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/buckets/${bucketID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostBucketsIDOwners
   */
  postBucketsIDOwners(
    bucketID: string,
    request: PostBucketsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/buckets/${bucketID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a bucket.
   * @param userID The ID of the owner to remove.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteBucketsIDOwnersID
   */
  deleteBucketsIDOwnersID(
    userID: string,
    bucketID: string,
    request?: DeleteBucketsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/buckets/${bucketID}/owners/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for a bucket.
   * @param bucketID The bucket ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetBucketsIDLogs
   */
  getBucketsIDLogs(
    bucketID: string,
    request?: GetBucketsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/buckets/${bucketID}/logs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
}
