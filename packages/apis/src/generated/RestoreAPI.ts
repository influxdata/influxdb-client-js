import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {BucketMetadataManifest, RestoredBucketMappings} from './types'

export interface PostRestoreKVRequest {
  /** Full KV snapshot. */
  body: string
}
export interface PostRestoreSQLRequest {
  /** Full SQL snapshot. */
  body: string
}
export interface PostRestoreBucketMetadataRequest {
  /** Metadata manifest for a bucket. */
  body: BucketMetadataManifest
}
export interface PostRestoreShardIdRequest {
  /** The shard ID. */
  shardID: string
  /** TSM snapshot. */
  body: string
}
/**
 * Restore API
 */
export class RestoreAPI {
  // internal
  private base: APIBase

  /**
   * Creates RestoreAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Overwrite the embedded KV store on the server with a backed-up snapshot.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostRestoreKV }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreKV(
    request: PostRestoreKVRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/restore/kv`,
      request,
      requestOptions,
      'text/plain'
    )
  }
  /**
   * Overwrite the embedded SQL store on the server with a backed-up snapshot.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostRestoreSQL }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreSQL(
    request: PostRestoreSQLRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/restore/sql`,
      request,
      requestOptions,
      'text/plain'
    )
  }
  /**
   * Create a new bucket pre-seeded with shard info from a backup.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostRestoreBucketMetadata }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreBucketMetadata(
    request: PostRestoreBucketMetadataRequest,
    requestOptions?: RequestOptions
  ): Promise<RestoredBucketMappings> {
    return this.base.request(
      'POST',
      `/api/v2/restore/bucket-metadata`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Restore a TSM snapshot into a shard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostRestoreShardId }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreShardId(
    request: PostRestoreShardIdRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/restore/shards/${request.shardID}`,
      request,
      requestOptions,
      'text/plain'
    )
  }
}
