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
  /** Label to create */
  body: LabelCreateRequest
}
export interface GetLabelsIDRequest {
  /** The ID of the label to update. */
  labelID: string
}
export interface PatchLabelsIDRequest {
  /** The ID of the label to update. */
  labelID: string
  /** Label update */
  body: LabelUpdate
}
export interface DeleteLabelsIDRequest {
  /** The ID of the label to delete. */
  labelID: string
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteLabelsID
 */
export class LabelsAPI extends APIBase {
  /**
   * Creates LabelsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all labels.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabels
   */
  getLabels(
    request?: GetLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/labels${this.queryString(request, ['orgID'])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a label.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostLabels
   */
  postLabels(
    request: PostLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a label.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabelsID
   */
  getLabelsID(
    request: GetLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'GET',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a label.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchLabelsID
   */
  patchLabelsID(
    request: PatchLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'PATCH',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteLabelsID
   */
  deleteLabelsID(
    request: DeleteLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
