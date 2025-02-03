import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Script,
  ScriptCreateRequest,
  ScriptHTTPResponseData,
  ScriptInvocationParams,
  ScriptUpdateRequest,
  Scripts,
} from './types'

export interface GetScriptsRequest {
  /** The maximum number of scripts to return. Default is `100`.
   */
  limit?: number
  /** The offset for pagination.
Specifies the number of records to skip in the result.
 */
  offset?: number
  /** The name of the script. */
  name?: string
  /** A list of label names.
Only returns scripts that have all the specified labels.
To retrieve a script, each name you pass in `labelNames` must exactly
match the label for a script.
 */
  labelNames?: any
  /** A part of the label name.
Returns scripts that have a label that contains the specified phrase.
 */
  labelContains?: string
}
export interface PostScriptsRequest {
  /** The script to create. */
  body: ScriptCreateRequest
}
export interface GetScriptsIDRequest {
  /** A script ID.
Specifies the script to retrieve.
 */
  scriptID: string
}
export interface PatchScriptsIDRequest {
  /** A script ID.
Specifies the script to update.
 */
  scriptID: string
  /** The script update to apply. */
  body: ScriptUpdateRequest
}
export interface DeleteScriptsIDRequest {
  /** A script ID.
Specifies the script to delete.
 */
  scriptID: string
}
export interface PostScriptsIDInvokeRequest {
  /** A script ID.
Specifies the script to execute.
 */
  scriptID: string
  /** entity body */
  body: ScriptInvocationParams
}
export interface PatchScriptsIDAddLabelsRequest {
  /** The script ID.
Specifies the script to add labels to.
 */
  scriptID: string
  /** The labels to add to the script. */
  body: {
    /** A list of label names to add. */
    labels?: string[]
  }
}
export interface PatchScriptsIDRemoveLabelsRequest {
  /** A script ID. Specifies the script to remove labels from. */
  scriptID: string
  /** The labels to remove from the script. */
  body: {
    /** A list of label names to remove. */
    labels?: string[]
  }
}
/**
 * Scripts API
 */
export class ScriptsAPI {
  // internal
  private base: APIBase

  /**
   * Creates ScriptsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List scripts.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/GetScripts }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScripts(
    request?: GetScriptsRequest,
    requestOptions?: RequestOptions
  ): Promise<Scripts> {
    return this.base.request(
      'GET',
      `/api/v2/scripts${this.base.queryString(request, [
        'limit',
        'offset',
        'name',
        'labelNames',
        'labelContains',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/PostScripts }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScripts(
    request: PostScriptsRequest,
    requestOptions?: RequestOptions
  ): Promise<Script> {
    return this.base.request(
      'POST',
      `/api/v2/scripts`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/GetScriptsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getScriptsID(
    request: GetScriptsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Script> {
    return this.base.request(
      'GET',
      `/api/v2/scripts/${request.scriptID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/PatchScriptsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchScriptsID(
    request: PatchScriptsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Script> {
    return this.base.request(
      'PATCH',
      `/api/v2/scripts/${request.scriptID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/DeleteScriptsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteScriptsID(
    request: DeleteScriptsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/scripts/${request.scriptID}`,
      request,
      requestOptions
    )
  }
  /**
   * Invoke a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/PostScriptsIDInvoke }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postScriptsIDInvoke(
    request: PostScriptsIDInvokeRequest,
    requestOptions?: RequestOptions
  ): Promise<ScriptHTTPResponseData> {
    return this.base.request(
      'POST',
      `/api/v2/scripts/${request.scriptID}/invoke`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Add labels to a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/PatchScriptsIDAddLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchScriptsIDAddLabels(
    request: PatchScriptsIDAddLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<Script> {
    return this.base.request(
      'PATCH',
      `/api/v2/scripts/${request.scriptID}/labels/add`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove labels from a script.
   * See {@link https://docs.influxdata.com/influxdb/cloud/api/#operation/PatchScriptsIDRemoveLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchScriptsIDRemoveLabels(
    request: PatchScriptsIDRemoveLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<Script> {
    return this.base.request(
      'PATCH',
      `/api/v2/scripts/${request.scriptID}/labels/remove`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
