import {InfluxDB} from '@influxdata/influxdb-client'
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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteLabelsID
 */
export class LabelsAPI extends APIBase {
  /**
   * Creates LabelsAPI
   * @param influxDB InfluxDB
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Get all labels.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabelsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchLabelsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteLabelsID
   * @param request
   * @return promise of response
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
