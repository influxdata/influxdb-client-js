import {InfluxDB} from '@influxdata/influxdb-client'
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
  /** The number of scripts to return. */
  limit?: number
  /** The offset for pagination. */
  offset?: number
}
export interface PostScriptsRequest {
  /** The script to create. */
  body: ScriptCreateRequest
}
export interface GetScriptsIDRequest {
  /** The script ID. */
  scriptID: string
}
export interface PatchScriptsIDRequest {
  /** The script ID. */
  scriptID: string
  /** Script update to apply */
  body: ScriptUpdateRequest
}
export interface DeleteScriptsIDRequest {
  /** The ID of the script to delete. */
  scriptID: string
}
export interface PostScriptsIDInvokeRequest {
  scriptID: string
  /** entity body */
  body: ScriptInvocationParams
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
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScripts }
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
      `/api/v2/scripts${this.base.queryString(request, ['limit', 'offset'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a script.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScripts }
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
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetScriptsID }
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
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScriptsID }
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
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScriptsID }
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
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostScriptsIDInvoke }
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
}
