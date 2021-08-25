import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {DBRP, DBRPCreate, DBRPGet, DBRPUpdate, DBRPs} from './types'

export interface GetDBRPsRequest {
  /** Specifies the organization ID to filter on */
  orgID?: string
  /** Specifies the organization name to filter on */
  org?: string
  /** Specifies the mapping ID to filter on */
  id?: string
  /** Specifies the bucket ID to filter on */
  bucketID?: string
  /** Specifies filtering on default */
  default?: any
  /** Specifies the database to filter on */
  db?: string
  /** Specifies the retention policy to filter on */
  rp?: string
}
export interface PostDBRPRequest {
  /** The Database Retention Policy Mapping to add */
  body: DBRPCreate
}
export interface GetDBRPsIDRequest {
  /** The database retention policy mapping ID */
  dbrpID: string
  /** Specifies the organization ID of the mapping */
  orgID?: string
  /** Specifies the organization name of the mapping */
  org?: string
}
export interface PatchDBRPIDRequest {
  /** The database retention policy mapping. */
  dbrpID: string
  /** Database retention policy update to apply */
  body: DBRPUpdate
  /** Specifies the organization ID of the mapping */
  orgID?: string
  /** Specifies the organization name of the mapping */
  org?: string
}
export interface DeleteDBRPIDRequest {
  /** The database retention policy mapping */
  dbrpID: string
  /** Specifies the organization ID of the mapping */
  orgID?: string
  /** Specifies the organization name of the mapping */
  org?: string
}
/**
 * Dbrps API
 */
export class DbrpsAPI {
  // internal
  private base: APIBase

  /**
   * Creates DbrpsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all database retention policy mappings.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDBRPs(
    request?: GetDBRPsRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRPs> {
    return this.base.request(
      'GET',
      `/api/v2/dbrps${this.base.queryString(request, [
        'orgID',
        'org',
        'id',
        'bucketID',
        'default',
        'db',
        'rp',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Add a database retention policy mapping.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDBRP }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDBRP(
    request: PostDBRPRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRP> {
    return this.base.request(
      'POST',
      `/api/v2/dbrps`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a database retention policy mapping.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDBRPsID(
    request: GetDBRPsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRPGet> {
    return this.base.request(
      'GET',
      `/api/v2/dbrps/${request.dbrpID}${this.base.queryString(request, [
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a database retention policy mapping.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDBRPID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchDBRPID(
    request: PatchDBRPIDRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRPGet> {
    return this.base.request(
      'PATCH',
      `/api/v2/dbrps/${request.dbrpID}${this.base.queryString(request, [
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a database retention policy.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDBRPID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDBRPID(
    request: DeleteDBRPIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dbrps/${request.dbrpID}${this.base.queryString(request, [
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
}
