import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Stack} from './types'

export interface ListStacksRequest {
  /** The ID of the organization that owns the stacks.
Only returns stacks owned by this organization.

#### InfluxDB Cloud

- Doesn't require this parameter;
  InfluxDB only returns resources allowed by the API token.
 */
  orgID: string
  /** The stack name.
Finds stack `events` with this name and returns the stacks.

Repeatable.
To filter for more than one stack name,
repeat this parameter with each name--for example:

- `http://localhost:8086/api/v2/stacks?&orgID=INFLUX_ORG_ID&name=project-stack-0&name=project-stack-1`
 */
  name?: string
  /** The stack ID.
Only returns stacks with this ID.

Repeatable.
To filter for more than one stack ID,
repeat this parameter with each ID--for example:

- `http://localhost:8086/api/v2/stacks?&orgID=INFLUX_ORG_ID&stackID=09bd87cd33be3000&stackID=09bef35081fe3000`
 */
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
   * List installed stacks.
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
   * Create a stack.
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
