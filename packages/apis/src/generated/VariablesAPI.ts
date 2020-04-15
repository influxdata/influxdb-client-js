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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariables
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariables
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariables
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariables
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutVariablesID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchVariablesID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetVariablesIDLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostVariablesIDLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteVariablesIDLabelsID
   * @param request
   * @return promise of response
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
