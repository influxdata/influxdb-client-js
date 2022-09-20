import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Replication,
  ReplicationCreationRequest,
  ReplicationUpdateRequest,
  Replications,
} from './types'

export interface GetReplicationsRequest {
  /** The organization ID. */
  orgID: string
  name?: string
  remoteID?: string
  localBucketID?: string
}
export interface PostReplicationRequest {
  /** entity body */
  body: ReplicationCreationRequest
  /** If true, validate the replication, but don't save it. */
  validate?: any
}
export interface GetReplicationByIDRequest {
  replicationID: string
}
export interface PatchReplicationByIDRequest {
  replicationID: string
  /** entity body */
  body: ReplicationUpdateRequest
  /** If true, validate the updated information, but don't save it. */
  validate?: any
}
export interface DeleteReplicationByIDRequest {
  replicationID: string
}
export interface PostValidateReplicationByIDRequest {
  replicationID: string
}
/**
 * Replications API
 */
export class ReplicationsAPI {
  // internal
  private base: APIBase

  /**
   * Creates ReplicationsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all replications.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetReplications }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getReplications(
    request: GetReplicationsRequest,
    requestOptions?: RequestOptions
  ): Promise<Replications> {
    return this.base.request(
      'GET',
      `/api/v2/replications${this.base.queryString(request, [
        'orgID',
        'name',
        'remoteID',
        'localBucketID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Register a new replication.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostReplication }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postReplication(
    request: PostReplicationRequest,
    requestOptions?: RequestOptions
  ): Promise<Replication> {
    return this.base.request(
      'POST',
      `/api/v2/replications${this.base.queryString(request, ['validate'])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a replication.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetReplicationByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getReplicationByID(
    request: GetReplicationByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Replication> {
    return this.base.request(
      'GET',
      `/api/v2/replications/${request.replicationID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a replication.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PatchReplicationByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchReplicationByID(
    request: PatchReplicationByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Replication> {
    return this.base.request(
      'PATCH',
      `/api/v2/replications/${request.replicationID}${this.base.queryString(
        request,
        ['validate']
      )}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a replication.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteReplicationByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteReplicationByID(
    request: DeleteReplicationByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/replications/${request.replicationID}`,
      request,
      requestOptions
    )
  }
  /**
   * Validate a replication.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostValidateReplicationByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postValidateReplicationByID(
    request: PostValidateReplicationByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/replications/${request.replicationID}/validate`,
      request,
      requestOptions
    )
  }
}
