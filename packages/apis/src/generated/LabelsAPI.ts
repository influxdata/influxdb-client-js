import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelCreateRequest,
  LabelResponse,
  LabelUpdate,
  LabelsResponse,
} from './types'

export interface GetLabelsRequest {
  /** The organization ID. */
  orgID?: string
}
export interface PostLabelsRequest {
  /** The label to create. */
  body: LabelCreateRequest
}
export interface GetLabelsIDRequest {
  /** The ID of the label to update. */
  labelID: string
}
export interface PatchLabelsIDRequest {
  /** The ID of the label to update. */
  labelID: string
  /** A label update. */
  body: LabelUpdate
}
export interface DeleteLabelsIDRequest {
  /** The ID of the label to delete. */
  labelID: string
}
/**
 * Labels API
 */
export class LabelsAPI {
  // internal
  private base: APIBase

  /**
   * Creates LabelsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all labels.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getLabels(
    request?: GetLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/labels${this.base.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a label.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postLabels(
    request: PostLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a label.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getLabelsID(
    request: GetLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'GET',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a label.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PatchLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchLabelsID(
    request: PatchLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'PATCH',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteLabelsID(
    request: DeleteLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
