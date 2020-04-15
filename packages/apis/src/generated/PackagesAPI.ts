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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/CreatePkg
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/ApplyPkg
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/CreatePkg
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/ApplyPkg
   * @param request
   * @return promise of response
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
