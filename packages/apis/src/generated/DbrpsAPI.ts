import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {DBRP, DBRPUpdate, DBRPs} from './types'

export interface GetDBRPsRequest {
  /** Specifies the organization ID to filter on */
  orgID: string
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
  /** The database retention policy mapping to add */
  body: DBRP
}
export interface GetDBRPsIDRequest {
  /** The database retention policy mapping ID */
  dbrpID: string
  /** Specifies the organization ID of the mapping */
  orgID: string
}
export interface PatchDBRPIDRequest {
  /** The database retention policy mapping. */
  dbrpID: string
  /** Database retention policy update to apply */
  body: DBRPUpdate
  /** Specifies the organization ID of the mapping */
  orgID: string
}
export interface DeleteDBRPIDRequest {
  /** The database retention policy mapping */
  dbrpID: string
  /** Specifies the organization ID of the mapping */
  orgID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDBRP
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDBRPID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDBRPID
 */
export class DbrpsAPI extends APIBase {
  /**
   * Creates DbrpsAPI
   * @param influxDB InfluxDB
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * List all database retention policy mappings.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPs
   * @param request
   * @return promise of response
   */
  getDBRPs(
    request: GetDBRPsRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRPs> {
    return this.request(
      'GET',
      `/api/v2/dbrps${this.queryString(request, [
        'orgID',
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDBRP
   * @param request
   * @return promise of response
   */
  postDBRP(
    request: PostDBRPRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRP> {
    return this.request(
      'POST',
      `/api/v2/dbrps`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a database retention policy mapping.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPsID
   * @param request
   * @return promise of response
   */
  getDBRPsID(
    request: GetDBRPsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRP> {
    return this.request(
      'GET',
      `/api/v2/dbrps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a database retention policy mapping.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDBRPID
   * @param request
   * @return promise of response
   */
  patchDBRPID(
    request: PatchDBRPIDRequest,
    requestOptions?: RequestOptions
  ): Promise<DBRP> {
    return this.request(
      'PATCH',
      `/api/v2/dbrps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a database retention policy.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDBRPID
   * @param request
   * @return promise of response
   */
  deleteDBRPID(
    request: DeleteDBRPIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dbrps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
}
