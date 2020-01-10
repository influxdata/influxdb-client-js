import {APIBase, RequestOptions} from '../APIBase'
import {Buckets, HealthCheck, Source, Sources} from './types'

export interface GetSourcesRequest {
  query: {
    /** The organization name. */
    org?: string
  }
}
export interface PostSourcesRequest {
  /** Source to create */
  body: Source
}
export interface GetSourcesIDRequest {}
export interface PatchSourcesIDRequest {
  /** Source update */
  body: Source
}
export interface DeleteSourcesIDRequest {}
export interface GetSourcesIDHealthRequest {}
export interface GetSourcesIDBucketsRequest {
  query: {
    /** The organization name. */
    org?: string
  }
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSources
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSources
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchSourcesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteSourcesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDHealth
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDBuckets
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSources
   */
  getSources(
    request?: GetSourcesRequest,
    requestOptions?: RequestOptions
  ): Promise<Sources> {
    return this.request(
      'GET',
      `/api/v2/sources${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Creates a source.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSources
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
   * @param sourceID The source ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesID
   */
  getSourcesID(
    sourceID: string,
    request?: GetSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Source> {
    return this.request(
      'GET',
      `/api/v2/sources/${sourceID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a Source.
   * @param sourceID The source ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchSourcesID
   */
  patchSourcesID(
    sourceID: string,
    request: PatchSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Source> {
    return this.request(
      'PATCH',
      `/api/v2/sources/${sourceID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a source.
   * @param sourceID The source ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteSourcesID
   */
  deleteSourcesID(
    sourceID: string,
    request?: DeleteSourcesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/sources/${sourceID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get the health of a source.
   * @param sourceID The source ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDHealth
   */
  getSourcesIDHealth(
    sourceID: string,
    request?: GetSourcesIDHealthRequest,
    requestOptions?: RequestOptions
  ): Promise<HealthCheck> {
    return this.request(
      'GET',
      `/api/v2/sources/${sourceID}/health`,
      request,
      requestOptions
    )
  }
  /**
   * Get buckets in a source.
   * @param sourceID The source ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSourcesIDBuckets
   */
  getSourcesIDBuckets(
    sourceID: string,
    request?: GetSourcesIDBucketsRequest,
    requestOptions?: RequestOptions
  ): Promise<Buckets> {
    return this.request(
      'GET',
      `/api/v2/sources/${sourceID}/buckets${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
}
