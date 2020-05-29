import {APIBase, RequestOptions} from '../APIBase'
import {DBRP, DBRPUpdate} from './types'

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
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDBRPsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDBRPID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDBRPID
 */
export class DprpsAPI extends APIBase {
  /**
   * Creates DprpsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
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
      `/api/v2/dprps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
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
      `/api/v2/dprps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
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
      `/api/v2/dprps/${request.dbrpID}${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
}
