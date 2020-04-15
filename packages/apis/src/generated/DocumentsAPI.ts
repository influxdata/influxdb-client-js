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
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplates
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplates
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutDocumentsTemplatesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplatesIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesIDLabelsID
 */
export class DocumentsAPI extends APIBase {
  /**
   * Creates DocumentsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplates
   * @param request
   * @return promise of response
   */
  getDocumentsTemplates(
    request?: GetDocumentsTemplatesRequest,
    requestOptions?: RequestOptions
  ): Promise<Documents> {
    return this.request(
      'GET',
      `/api/v2/documents/templates${this.queryString(request, [
        'org',
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a template.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplates
   * @param request
   * @return promise of response
   */
  postDocumentsTemplates(
    request: PostDocumentsTemplatesRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.request(
      'POST',
      `/api/v2/documents/templates`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesID
   * @param request
   * @return promise of response
   */
  getDocumentsTemplatesID(
    request: GetDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.request(
      'GET',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutDocumentsTemplatesID
   * @param request
   * @return promise of response
   */
  putDocumentsTemplatesID(
    request: PutDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.request(
      'PUT',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a template.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesID
   * @param request
   * @return promise of response
   */
  deleteDocumentsTemplatesID(
    request: DeleteDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/documents/templates/${request.templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a template.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesIDLabels
   * @param request
   * @return promise of response
   */
  getDocumentsTemplatesIDLabels(
    request: GetDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/documents/templates/${request.templateID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a template.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplatesIDLabels
   * @param request
   * @return promise of response
   */
  postDocumentsTemplatesIDLabels(
    request: PostDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/documents/templates/${request.templateID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a template.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesIDLabelsID
   * @param request
   * @return promise of response
   */
  deleteDocumentsTemplatesIDLabelsID(
    request: DeleteDocumentsTemplatesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/documents/templates/${request.templateID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
