import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'
import {MetadataBackup} from './types'

export interface GetBackupKVRequest {}
export interface GetBackupMetadataRequest {}
export interface GetBackupShardIdRequest {
  /** The shard ID. */
  shardID: number
  /** The earliest time [RFC3339 date/time format](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#rfc3339-timestamp) to include in the snapshot. */
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
   * Download snapshot of metadata stored in the server's embedded KV store. Don't use with InfluxDB versions greater than InfluxDB 2.1.x.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetBackupKV }
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
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetBackupMetadata }
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
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetBackupShardId }
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
