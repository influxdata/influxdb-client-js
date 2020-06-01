import {APIBase, RequestOptions} from '../APIBase'
import {DBRP, DBRPs} from './types'

export interface GetDPRPsRequest {
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
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDPRPs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDBRP
 */
export class DbrpsAPI extends APIBase {
  /**
   * Creates DbrpsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all database retention policy mappings.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDPRPs
   * @param request
   * @return promise of response
   */
  getDPRPs(
    request: GetDPRPsRequest,
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
}
