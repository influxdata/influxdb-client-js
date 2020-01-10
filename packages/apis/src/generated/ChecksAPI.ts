import {APIBase, RequestOptions} from '../APIBase'
import {
  Check,
  CheckPatch,
  Checks,
  FluxResponse,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  PostCheck,
} from './types'

export interface GetChecksRequest {
  query: {
    offset?: number
    limit?: number
    /** Only show checks that belong to a specific organization ID. */
    orgID: string
  }
}
export interface CreateCheckRequest {
  /** Check to create */
  body: PostCheck
}
export interface GetChecksIDRequest {}
export interface PutChecksIDRequest {
  /** Check update to apply */
  body: Check
}
export interface PatchChecksIDRequest {
  /** Check update to apply */
  body: CheckPatch
}
export interface DeleteChecksIDRequest {}
export interface GetChecksIDLabelsRequest {}
export interface PostChecksIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteChecksIDLabelsIDRequest {}
export interface GetChecksIDQueryRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecks
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateCheck
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutChecksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchChecksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostChecksIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDQuery
 */
export class ChecksAPI extends APIBase {
  /**
   * Creates ChecksAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all checks.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecks
   */
  getChecks(
    request: GetChecksRequest,
    requestOptions?: RequestOptions
  ): Promise<Checks> {
    return this.request(
      'GET',
      `/api/v2/checks${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Add new check.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateCheck
   */
  createCheck(
    request: CreateCheckRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'POST',
      `/api/v2/checks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksID
   */
  getChecksID(
    checkID: string,
    request?: GetChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'GET',
      `/api/v2/checks/${checkID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutChecksID
   */
  putChecksID(
    checkID: string,
    request: PutChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'PUT',
      `/api/v2/checks/${checkID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchChecksID
   */
  patchChecksID(
    checkID: string,
    request: PatchChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'PATCH',
      `/api/v2/checks/${checkID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksID
   */
  deleteChecksID(
    checkID: string,
    request?: DeleteChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/checks/${checkID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDLabels
   */
  getChecksIDLabels(
    checkID: string,
    request?: GetChecksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/checks/${checkID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a check.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostChecksIDLabels
   */
  postChecksIDLabels(
    checkID: string,
    request: PostChecksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/checks/${checkID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete label from a check.
   * @param checkID The check ID.
   * @param labelID The ID of the label to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksIDLabelsID
   */
  deleteChecksIDLabelsID(
    checkID: string,
    labelID: string,
    request?: DeleteChecksIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/checks/${checkID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get a check query.
   * @param checkID The check ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDQuery
   */
  getChecksIDQuery(
    checkID: string,
    request?: GetChecksIDQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxResponse> {
    return this.request(
      'GET',
      `/api/v2/checks/${checkID}/query`,
      request,
      requestOptions
    )
  }
}
