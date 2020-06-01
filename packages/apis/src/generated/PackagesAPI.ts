import {APIBase, RequestOptions} from '../APIBase'
import {Pkg, PkgApply, PkgCreate, PkgSummary} from './types'

export interface CreatePkgRequest {
  /** Influx package to create. */
  body: PkgCreate
}
export interface ApplyPkgRequest {
  body: PkgApply
}
export interface ListStacksRequest {
  /** The organization id of the stacks */
  orgID: string
  /** A collection of names to filter the list by. */
  name?: string
  /** A collection of stackIDs to filter the list by. */
  stackID?: string
}
export interface CreateStackRequest {
  /** Influx package to create. */
  body: {
    orgID?: string
    name?: string
    description?: string
    urls?: string[]
  }
}
export interface DeleteStackRequest {
  /** The stack id to be removed */
  stack_id: string
  /** The organization id of the user */
  orgID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/CreatePkg
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/ApplyPkg
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/ListStacks
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/CreateStack
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteStack
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
  /**
   * Grab a list of installed Influx packages.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/ListStacks
   * @param request
   * @return promise of response
   */
  listStacks(
    request: ListStacksRequest,
    requestOptions?: RequestOptions
  ): Promise<
    Array<{
      id?: string
      orgID?: string
      name?: string
      description?: string
      urls?: string[]
      readonly createdAt?: string
      readonly updatedAt?: string
      resources?: {
        apiVersion?: string
        resourceID?: string
        kind?: string
        pkgName?: string
        associations?: Array<{
          kind?: string
          pkgName?: string
        }>
      }
    }>
  > {
    return this.request(
      'GET',
      `/api/v2/packages/stacks${this.queryString(request, [
        'orgID',
        'name',
        'stackID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a new Influx package.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/CreateStack
   * @param request
   * @return promise of response
   */
  createStack(
    request: CreateStackRequest,
    requestOptions?: RequestOptions
  ): Promise<{
    id?: string
    orgID?: string
    name?: string
    description?: string
    urls?: string[]
    readonly createdAt?: string
    readonly updatedAt?: string
  }> {
    return this.request(
      'POST',
      `/api/v2/packages/stacks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a stack and remove all its associated resources.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteStack
   * @param request
   * @return promise of response
   */
  deleteStack(
    request: DeleteStackRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/packages/stacks/${request.stack_id}${this.queryString(request, [
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
}
