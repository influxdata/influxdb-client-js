import {APIBase, RequestOptions} from '../APIBase'
import {Pkg, PkgApply, PkgCreate, PkgSummary} from './types'

export interface CreatePkgRequest {
  /** Influx package to create. */
  body: PkgCreate
}
export interface ApplyPkgRequest {
  body: PkgApply
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreatePkg
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/ApplyPkg
 */
export class PackagesAPI extends APIBase {
  /**
   * Creates PackagesAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Create a new Influx package.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreatePkg
   */
  createPkg(
    request: CreatePkgRequest,
    requestOptions?: RequestOptions
  ): Promise<Pkg> {
    return this.request(
      'POST',
      `/api/v2/packages`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Apply or dry-run an Influx package.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/ApplyPkg
   */
  applyPkg(
    request: ApplyPkgRequest,
    requestOptions?: RequestOptions
  ): Promise<PkgSummary> {
    return this.request(
      'POST',
      `/api/v2/packages/apply`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
