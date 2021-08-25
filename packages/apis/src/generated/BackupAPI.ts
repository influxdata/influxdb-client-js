import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {MetadataBackup} from './types'

export interface GetBackupKVRequest {}
export interface GetBackupMetadataRequest {}
export interface GetBackupShardIdRequest {
  /** The shard ID. */
  shardID: number
  /** Earliest time to include in the snapshot. RFC3339 format. */
  since?: string
}
/**
 * Backup API
 */
export class BackupAPI {
  // internal
  private base: APIBase

  /**
   * Creates BackupAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Download snapshot of metadata stored in the server's embedded KV store. Should not be used in versions greater than 2.1.x, as it doesn't include metadata stored in embedded SQL.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBackupKV }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBackupKV(
    request?: GetBackupKVRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/backup/kv`,
      request,
      requestOptions
    )
  }
  /**
   * Download snapshot of all metadata in the server.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBackupMetadata }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBackupMetadata(
    request?: GetBackupMetadataRequest,
    requestOptions?: RequestOptions
  ): Promise<MetadataBackup> {
    return this.base.request(
      'GET',
      `/api/v2/backup/metadata`,
      request,
      requestOptions
    )
  }
  /**
   * Download snapshot of all TSM data in a shard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetBackupShardId }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getBackupShardId(
    request: GetBackupShardIdRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'GET',
      `/api/v2/backup/shards/${request.shardID}${this.base.queryString(
        request,
        ['since']
      )}`,
      request,
      requestOptions
    )
  }
}
