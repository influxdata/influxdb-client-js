import {APIBase, RequestOptions} from '../APIBase'
import {Pkg, PkgApply, PkgCreate, PkgSummary, Stack} from './types'

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
  /** Influx stack to create. */
  body: {
    orgID?: string
    name?: string
    description?: string
    urls?: string[]
  }
}
export interface ReadStackRequest {
  /** The stack id */
  stack_id: string
}
export interface UpdateStackRequest {
  /** The stack id */
  stack_id: string
  /** Influx stack to update. */
  body: {
    name?: string
    description?: string
    urls?: string[]
  }
}
export interface DeleteStackRequest {
  /** The stack id */
  stack_id: string
  /** The organization id of the user */
  orgID: string
}
export interface ExportStackRequest {
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
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/ReadStack
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/UpdateStack
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteStack
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/ExportStack
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
  ): Promise<{
    stacks?: Stack[]
  }> {
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
   * Create a new stack.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/CreateStack
   * @param request
   * @return promise of response
   */
  createStack(
    request: CreateStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.request(
      'POST',
      `/api/v2/packages/stacks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Grab a stack by its ID.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/ReadStack
   * @param request
   * @return promise of response
   */
  readStack(
    request: ReadStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.request(
      'GET',
      `/api/v2/packages/stacks/${request.stack_id}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a an Influx Stack.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/UpdateStack
   * @param request
   * @return promise of response
   */
  updateStack(
    request: UpdateStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.request(
      'PATCH',
      `/api/v2/packages/stacks/${request.stack_id}`,
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
  /**
   * Export a stack's resources in the form of a package.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/ExportStack
   * @param request
   * @return promise of response
   */
  exportStack(
    request: ExportStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Pkg> {
    return this.request(
      'DELETE',
      `/api/v2/packages/stacks/${
        request.stack_id
      }/export${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
}
