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
export interface PostRestoreBucketIDRequest {
  /** The bucket ID. */
  bucketID: string
  /** Database info serialized as protobuf. */
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
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostRestoreKV }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreKV(
    request: PostRestoreKVRequest,
    requestOptions?: RequestOptions
  ): Promise<{
    /** token is the root token for the instance after restore (this is overwritten during the restore) */
    token?: string
  }> {
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
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostRestoreSQL }
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
   * Overwrite storage metadata for a bucket with shard info from a backup.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostRestoreBucketID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRestoreBucketID(
    request: PostRestoreBucketIDRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'POST',
      `/api/v2/restore/bucket/${request.bucketID}`,
      request,
      requestOptions,
      'text/plain'
    )
  }
  /**
   * Create a new bucket pre-seeded with shard info from a backup.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostRestoreBucketMetadata }
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
      `/api/v2/restore/bucketMetadata`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Restore a TSM snapshot into a shard.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostRestoreShardId }
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
