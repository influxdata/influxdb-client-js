import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  RemoteConnection,
  RemoteConnectionCreationRequest,
  RemoteConnectionUpdateRequest,
  RemoteConnections,
} from './types'

export interface GetRemoteConnectionsRequest {
  /** The organization ID. */
  orgID: string
  name?: string
  remoteURL?: string
}
export interface PostRemoteConnectionRequest {
  /** entity body */
  body: RemoteConnectionCreationRequest
  /** If true, validate the remote connection, but don't save it. */
  validate?: any
}
export interface GetRemoteConnectionByIDRequest {
  remoteID: string
}
export interface PatchRemoteConnectionByIDRequest {
  remoteID: string
  /** entity body */
  body: RemoteConnectionUpdateRequest
  /** If true, validate the updated information, but don't save it. */
  validate?: any
}
export interface DeleteRemoteConnectionByIDRequest {
  remoteID: string
}
export interface PostValidateRemoteConnectionByIDRequest {
  remoteID: string
}
/**
 * Remotes API
 */
export class RemotesAPI {
  // internal
  private base: APIBase

  /**
   * Creates RemotesAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all remote connections.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetRemoteConnections }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getRemoteConnections(
    request: GetRemoteConnectionsRequest,
    requestOptions?: RequestOptions
  ): Promise<RemoteConnections> {
    return this.base.request(
      'GET',
      `/api/v2/remotes${this.base.queryString(request, [
        'orgID',
        'name',
        'remoteURL',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Register a new remote connection.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostRemoteConnection }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postRemoteConnection(
    request: PostRemoteConnectionRequest,
    requestOptions?: RequestOptions
  ): Promise<RemoteConnection> {
    return this.base.request(
      'POST',
      `/api/v2/remotes${this.base.queryString(request, ['validate'])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a remote connection.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetRemoteConnectionByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getRemoteConnectionByID(
    request: GetRemoteConnectionByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<RemoteConnection> {
    return this.base.request(
      'GET',
      `/api/v2/remotes/${request.remoteID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a remote connection.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchRemoteConnectionByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchRemoteConnectionByID(
    request: PatchRemoteConnectionByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<RemoteConnection> {
    return this.base.request(
      'PATCH',
      `/api/v2/remotes/${request.remoteID}${this.base.queryString(request, [
        'validate',
      ])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a remote connection.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteRemoteConnectionByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteRemoteConnectionByID(
    request: DeleteRemoteConnectionByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/remotes/${request.remoteID}`,
      request,
      requestOptions
    )
  }
  /**
   * Validate a remote connection.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostValidateRemoteConnectionByID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postValidateRemoteConnectionByID(
    request: PostValidateRemoteConnectionByIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/remotes/${request.remoteID}/validate`,
      request,
      requestOptions
    )
  }
}
