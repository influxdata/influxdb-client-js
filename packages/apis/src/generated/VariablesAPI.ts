import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  Variable,
  Variables,
} from './types'

export interface GetVariablesRequest {
  query: {
    /** The organization name. */
    org?: string
    /** The organization ID. */
    orgID?: string
  }
}
export interface PostVariablesRequest {
  /** Variable to create */
  body: Variable
}
export interface GetVariablesIDRequest {}
export interface PutVariablesIDRequest {
  /** Variable to replace */
  body: Variable
}
export interface PatchVariablesIDRequest {
  /** Variable update to apply */
  body: Variable
}
export interface DeleteVariablesIDRequest {}
export interface GetVariablesIDLabelsRequest {}
export interface PostVariablesIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteVariablesIDLabelsIDRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariables
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariables
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID
 */
export class VariablesAPI extends APIBase {
  /**
   * Creates VariablesAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all variables.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariables
   */
  getVariables(
    request?: GetVariablesRequest,
    requestOptions?: RequestOptions
  ): Promise<Variables> {
    return this.request(
      'GET',
      `/api/v2/variables${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariables
   */
  postVariables(
    request: PostVariablesRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'POST',
      `/api/v2/variables`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID
   */
  getVariablesID(
    variableID: string,
    request?: GetVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'GET',
      `/api/v2/variables/${variableID}`,
      request,
      requestOptions
    )
  }
  /**
   * Replace a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID
   */
  putVariablesID(
    variableID: string,
    request: PutVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'PUT',
      `/api/v2/variables/${variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID
   */
  patchVariablesID(
    variableID: string,
    request: PatchVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'PATCH',
      `/api/v2/variables/${variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID
   */
  deleteVariablesID(
    variableID: string,
    request?: DeleteVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/variables/${variableID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels
   */
  getVariablesIDLabels(
    variableID: string,
    request?: GetVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/variables/${variableID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a variable.
   * @param variableID The variable ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels
   */
  postVariablesIDLabels(
    variableID: string,
    request: PostVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/variables/${variableID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a variable.
   * @param variableID The variable ID.
   * @param labelID The label ID to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID
   */
  deleteVariablesIDLabelsID(
    variableID: string,
    labelID: string,
    request?: DeleteVariablesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/variables/${variableID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
}
