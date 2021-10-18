import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Function,
  FunctionCreateRequest,
  FunctionHTTPResponseData,
  FunctionInvocationParams,
  FunctionRun,
  FunctionRuns,
  FunctionTriggerRequest,
  FunctionTriggerResponse,
  FunctionUpdateRequest,
  Functions,
} from './types'

export interface GetFunctionsRequest {
  /** The name of the organization. */
  org?: string
  /** The organization ID. */
  orgID?: string
  /** The number of functions to return */
  limit?: number
  /** Offset for pagination */
  offset?: number
}
export interface PostFunctionsRequest {
  /** Function to create */
  body: FunctionCreateRequest
}
export interface PostFunctionsTriggerRequest {
  /** Function to be triggered */
  body: FunctionTriggerRequest
}
export interface GetFunctionsIDRequest {
  /** The function ID. */
  functionID: string
}
export interface PatchFunctionsIDRequest {
  /** The function ID. */
  functionID: string
  /** Function update to apply */
  body: FunctionUpdateRequest
}
export interface DeleteFunctionsIDRequest {
  /** The ID of the function to delete. */
  functionID: string
}
export interface GetFunctionsIDInvokeRequest {
  functionID: string
  params?: any
}
export interface PostFunctionsIDInvokeRequest {
  functionID: string
  /** entity body */
  body: FunctionInvocationParams
}
export interface GetFunctionsIDRunsRequest {
  /** The ID of the function to get runs for. */
  functionID: string
  /** The number of functions to return */
  limit?: number
  /** Offset for pagination */
  offset?: number
}
export interface GetFunctionsIDRunsIDRequest {
  /** The function ID. */
  functionID: string
  /** The run ID. */
  runID: string
}
/**
 * Functions API
 */
export class FunctionsAPI {
  // internal
  private base: APIBase

  /**
   * Creates FunctionsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all Functions.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFunctions }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFunctions(
    request?: GetFunctionsRequest,
    requestOptions?: RequestOptions
  ): Promise<Functions> {
    return this.base.request(
      'GET',
      `/api/v2/functions${this.base.queryString(request, [
        'org',
        'orgID',
        'limit',
        'offset',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a new function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostFunctions }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postFunctions(
    request: PostFunctionsRequest,
    requestOptions?: RequestOptions
  ): Promise<Function> {
    return this.base.request(
      'POST',
      `/api/v2/functions`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Manually trigger a function without creating an associated function resource.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostFunctionsTrigger }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postFunctionsTrigger(
    request: PostFunctionsTriggerRequest,
    requestOptions?: RequestOptions
  ): Promise<FunctionTriggerResponse> {
    return this.base.request(
      'POST',
      `/api/v2/functions/trigger`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFunctionsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFunctionsID(
    request: GetFunctionsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Function> {
    return this.base.request(
      'GET',
      `/api/v2/functions/${request.functionID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchFunctionsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchFunctionsID(
    request: PatchFunctionsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Function> {
    return this.base.request(
      'PATCH',
      `/api/v2/functions/${request.functionID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteFunctionsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteFunctionsID(
    request: DeleteFunctionsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/functions/${request.functionID}`,
      request,
      requestOptions
    )
  }
  /**
   * Manually invoke a function with params in query.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFunctionsIDInvoke }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFunctionsIDInvoke(
    request: GetFunctionsIDInvokeRequest,
    requestOptions?: RequestOptions
  ): Promise<FunctionHTTPResponseData> {
    return this.base.request(
      'GET',
      `/api/v2/functions/${
        request.functionID
      }/invoke${this.base.queryString(request, ['params'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Manually invoke a function with params in request body.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostFunctionsIDInvoke }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postFunctionsIDInvoke(
    request: PostFunctionsIDInvokeRequest,
    requestOptions?: RequestOptions
  ): Promise<FunctionHTTPResponseData> {
    return this.base.request(
      'POST',
      `/api/v2/functions/${request.functionID}/invoke`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * List runs for a function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFunctionsIDRuns }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFunctionsIDRuns(
    request: GetFunctionsIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<FunctionRuns> {
    return this.base.request(
      'GET',
      `/api/v2/functions/${
        request.functionID
      }/runs${this.base.queryString(request, ['limit', 'offset'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve a single run for a function.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFunctionsIDRunsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFunctionsIDRunsID(
    request: GetFunctionsIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<FunctionRun> {
    return this.base.request(
      'GET',
      `/api/v2/functions/${request.functionID}/runs/${request.runID}`,
      request,
      requestOptions
    )
  }
}
