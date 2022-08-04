import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Stack} from './types'

export interface ListStacksRequest {
  /** The organization ID of the stacks */
  orgID: string
  /** A collection of names to filter the list by. */
  name?: string
  /** A collection of stackIDs to filter the list by. */
  stackID?: string
}
export interface CreateStackRequest {
  /** The stack to create. */
  body: {
    orgID?: string
    name?: string
    description?: string
    urls?: string[]
  }
}
export interface ReadStackRequest {
  /** The identifier of the stack. */
  stack_id: string
}
export interface UpdateStackRequest {
  /** The identifier of the stack. */
  stack_id: string
  /** The stack to update. */
  body: {
    name?: string
    description?: string
    templateURLs?: string[]
    additionalResources?: Array<{
      resourceID: string
      kind: string
      templateMetaName?: string
    }>
  }
}
export interface DeleteStackRequest {
  /** The identifier of the stack. */
  stack_id: string
  /** The identifier of the organization. */
  orgID: string
}
export interface UninstallStackRequest {
  /** The identifier of the stack. */
  stack_id: string
}
/**
 * Stacks API
 */
export class StacksAPI {
  // internal
  private base: APIBase

  /**
   * Creates StacksAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List installed templates.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/ListStacks }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  listStacks(
    request: ListStacksRequest,
    requestOptions?: RequestOptions
  ): Promise<{
    stacks?: Stack[]
  }> {
    return this.base.request(
      'GET',
      `/api/v2/stacks${this.base.queryString(request, [
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
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/CreateStack }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  createStack(
    request: CreateStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.base.request(
      'POST',
      `/api/v2/stacks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a stack.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/ReadStack }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  readStack(
    request: ReadStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.base.request(
      'GET',
      `/api/v2/stacks/${request.stack_id}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a stack.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/UpdateStack }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  updateStack(
    request: UpdateStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.base.request(
      'PATCH',
      `/api/v2/stacks/${request.stack_id}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a stack and associated resources.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteStack }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteStack(
    request: DeleteStackRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/stacks/${request.stack_id}${this.base.queryString(request, [
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Uninstall a stack.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/UninstallStack }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  uninstallStack(
    request: UninstallStackRequest,
    requestOptions?: RequestOptions
  ): Promise<Stack> {
    return this.base.request(
      'POST',
      `/api/v2/stacks/${request.stack_id}/uninstall`,
      request,
      requestOptions
    )
  }
}
