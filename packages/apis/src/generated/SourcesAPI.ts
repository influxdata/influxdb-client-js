import {APIBase, RequestOptions} from '../APIBase'
import {Buckets, HealthCheck, Source, Sources} from './types'

export interface GetSourcesRequest {
  /** The organization name. */
  org?: string
}
export interface PostSourcesRequest {
  /** Source to create */
  body: Source
}
export interface GetSourcesIDRequest {
  /** The source ID. */
  sourceID: string
}
export interface PatchSourcesIDRequest {
  /** The source ID. */
  sourceID: string
  /** Source update */
  body: Source
}
export interface DeleteSourcesIDRequest {
  /** The source ID. */
  sourceID: string
}
export interface GetSourcesIDHealthRequest {
  /** The source ID. */
  sourceID: string
}
export interface GetSourcesIDBucketsRequest {
  /** The source ID. */
  sourceID: string
  /** The organization name. */
  org?: string
}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSources
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSources
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchSourcesID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteSourcesID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDHealth
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDBuckets
 */
export class SourcesAPI extends APIBase {
  /**
   * Creates SourcesAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all sources.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSources
   * @param request
   * @return promise of response
   */
  getSources(
    request?: GetSourcesRequest,
    requestOptions?: RequestOptions
  ): Promise<Sources> {
    return this.request(
      'GET',
      `/api/v2/sources${this.queryString(request, ['org'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Creates a source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSources
   * @param request
   * @return promise of response
   */
  postSources(
    request: PostSourcesRequest,
    requestOptions?: RequestOptions
  ): Promise<Source> {
    return this.request(
      'POST',
      `/api/v2/sources`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesID
   * @param request
   * @return promise of response
   */
  getSourcesID(
    request: GetSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Source> {
    return this.request(
      'GET',
      `/api/v2/sources/${request.sourceID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a Source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchSourcesID
   * @param request
   * @return promise of response
   */
  patchSourcesID(
    request: PatchSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Source> {
    return this.request(
      'PATCH',
      `/api/v2/sources/${request.sourceID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteSourcesID
   * @param request
   * @return promise of response
   */
  deleteSourcesID(
    request: DeleteSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/sources/${request.sourceID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get the health of a source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDHealth
   * @param request
   * @return promise of response
   */
  getSourcesIDHealth(
    request: GetSourcesIDHealthRequest,
    requestOptions?: RequestOptions
  ): Promise<HealthCheck> {
    return this.request(
      'GET',
      `/api/v2/sources/${request.sourceID}/health`,
      request,
      requestOptions
    )
  }
  /**
   * Get buckets in a source.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDBuckets
   * @param request
   * @return promise of response
   */
  getSourcesIDBuckets(
    request: GetSourcesIDBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Buckets> {
    return this.request(
      'GET',
      `/api/v2/sources/${request.sourceID}/buckets${this.queryString(request, [
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
}
