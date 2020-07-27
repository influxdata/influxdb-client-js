import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Document,
  DocumentCreate,
  DocumentUpdate,
  Documents,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
} from './types'

export interface GetDocumentsTemplatesRequest {
  /** Specifies the name of the organization of the template. */
  org?: string
  /** Specifies the organization ID of the template. */
  orgID?: string
}
export interface PostDocumentsTemplatesRequest {
  /** Template that will be created */
  body: DocumentCreate
}
export interface GetDocumentsTemplatesIDRequest {
  /** The template ID. */
  templateID: string
}
export interface PutDocumentsTemplatesIDRequest {
  /** The template ID. */
  templateID: string
  /** Template that will be updated */
  body: DocumentUpdate
}
export interface DeleteDocumentsTemplatesIDRequest {
  /** The template ID. */
  templateID: string
}
export interface GetDocumentsTemplatesIDLabelsRequest {
  /** The template ID. */
  templateID: string
}
export interface PostDocumentsTemplatesIDLabelsRequest {
  /** The template ID. */
  templateID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteDocumentsTemplatesIDLabelsIDRequest {
  /** The template ID. */
  templateID: string
  /** The label ID. */
  labelID: string
}
/**
 * Documents API
 */
export class DocumentsAPI {
  // internal
  private base: APIBase

  /**
   * Creates DocumentsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplates }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDocumentsTemplates(
    request?: GetDocumentsTemplatesRequest,
    requestOptions?: RequestOptions
  ): Promise<Documents> {
    return this.base.request(
      'GET',
      `/api/v2/documents/templates${this.base.queryString(request, [
        'org',
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a template.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplates }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDocumentsTemplates(
    request: PostDocumentsTemplatesRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.base.request(
      'POST',
      `/api/v2/documents/templates`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDocumentsTemplatesID(
    request: GetDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.base.request(
      'GET',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PutDocumentsTemplatesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putDocumentsTemplatesID(
    request: PutDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.base.request(
      'PUT',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a template.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDocumentsTemplatesID(
    request: DeleteDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a template.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDocumentsTemplatesIDLabels(
    request: GetDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/documents/templates/${request.templateID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a template.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplatesIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDocumentsTemplatesIDLabels(
    request: PostDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/documents/templates/${request.templateID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a template.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDocumentsTemplatesIDLabelsID(
    request: DeleteDocumentsTemplatesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/documents/templates/${request.templateID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
