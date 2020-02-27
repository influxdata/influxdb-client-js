import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  Variable,
  Variables,
} from './types'

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
      `/api/v2/variables${this.queryString(request, ['org', 'orgID'])}`,
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID
   */
  getVariablesID(
    request: GetVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'GET',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions
    )
  }
  /**
   * Replace a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID
   */
  putVariablesID(
    request: PutVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'PUT',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID
   */
  patchVariablesID(
    request: PatchVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Variable> {
    return this.request(
      'PATCH',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID
   */
  deleteVariablesID(
    request: DeleteVariablesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/variables/${request.variableID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels
   */
  getVariablesIDLabels(
    request: GetVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/variables/${request.variableID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels
   */
  postVariablesIDLabels(
    request: PostVariablesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/variables/${request.variableID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a variable.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID
   */
  deleteVariablesIDLabelsID(
    request: DeleteVariablesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/variables/${request.variableID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
