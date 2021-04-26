import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  Variable,
  Variables,
} from './types'

export interface GetVariablesIDLabelsRequest {
  /** The variable ID. */
  variableID: string
}
export interface PostVariablesIDLabelsRequest {
  /** The variable ID. */
  variableID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteVariablesIDLabelsIDRequest {
  /** The variable ID. */
  variableID: string
  /** The label ID to delete. */
  labelID: string
}
export interface GetVariablesRequest {
  /** The organization name. */
  org?: string
  /** The organization ID. */
  orgID?: string
}
export interface PostVariablesRequest {
  /** Variable to create */
  body: Variable
}
export interface GetVariablesIDRequest {
  /** The variable ID. */
  variableID: string
}
export interface PutVariablesIDRequest {
  /** The variable ID. */
  variableID: string
  /** Variable to replace */
  body: Variable
}
export interface PatchVariablesIDRequest {
  /** The variable ID. */
  variableID: string
  /** Variable update to apply */
  body: Variable
}
export interface DeleteVariablesIDRequest {
  /** The variable ID. */
  variableID: string
}
/**
 * Variables API
 */
export class VariablesAPI {
  // internal
  private base: APIBase

  /**
   * Creates VariablesAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all labels for a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getVariablesIDLabels(
    request: GetVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/variables/${request.variableID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postVariablesIDLabels(
    request: PostVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/variables/${request.variableID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteVariablesIDLabelsID(
    request: DeleteVariablesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/variables/${request.variableID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get all variables.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariables }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getVariables(
    request?: GetVariablesRequest,
    requestOptions?: RequestOptions
  ): Promise<Variables> {
    return this.base.request(
      'GET',
      `/api/v2/variables${this.base.queryString(request, ['org', 'orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariables }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postVariables(
    request: PostVariablesRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.base.request(
      'POST',
      `/api/v2/variables`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getVariablesID(
    request: GetVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.base.request(
      'GET',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions
    )
  }
  /**
   * Replace a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putVariablesID(
    request: PutVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.base.request(
      'PUT',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchVariablesID(
    request: PatchVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.base.request(
      'PATCH',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a variable.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteVariablesID(
    request: DeleteVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions
    )
  }
}
