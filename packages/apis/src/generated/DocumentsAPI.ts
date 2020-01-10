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
  query: {
    /** Specifies the name of the organization of the template. */
    org?: string
    /** Specifies the organization ID of the template. */
    orgID?: string
  }
}
export interface PostDocumentsTemplatesRequest {
  /** Template that will be created */
  body: DocumentCreate
}
export interface GetDocumentsTemplatesIDRequest {}
export interface PutDocumentsTemplatesIDRequest {
  /** Template that will be updated */
  body: DocumentUpdate
}
export interface DeleteDocumentsTemplatesIDRequest {}
export interface GetDocumentsTemplatesIDLabelsRequest {}
export interface PostDocumentsTemplatesIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteDocumentsTemplatesIDLabelsIDRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplates
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplates
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutDocumentsTemplatesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplatesIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesIDLabelsID
 */
export class DocumentsAPI extends APIBase {
  /**
   * Creates DocumentsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplates
   */
  getDocumentsTemplates(
    request?: GetDocumentsTemplatesRequest,
    requestOptions?: RequestOptions
  ): Promise<Documents> {
    return this.request(
      'GET',
      `/api/v2/documents/templates${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a template.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplates
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
   * @param templateID The template ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesID
   */
  getDocumentsTemplatesID(
    templateID: string,
    request?: GetDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.request(
      'GET',
      `/api/v2/documents/templates/${templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * @param templateID The template ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutDocumentsTemplatesID
   */
  putDocumentsTemplatesID(
    templateID: string,
    request: PutDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Document> {
    return this.request(
      'PUT',
      `/api/v2/documents/templates/${templateID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a template.
   * @param templateID The template ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesID
   */
  deleteDocumentsTemplatesID(
    templateID: string,
    request?: DeleteDocumentsTemplatesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/documents/templates/${templateID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a template.
   * @param templateID The template ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDocumentsTemplatesIDLabels
   */
  getDocumentsTemplatesIDLabels(
    templateID: string,
    request?: GetDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/documents/templates/${templateID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a template.
   * @param templateID The template ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDocumentsTemplatesIDLabels
   */
  postDocumentsTemplatesIDLabels(
    templateID: string,
    request: PostDocumentsTemplatesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/documents/templates/${templateID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a template.
   * @param templateID The template ID.
   * @param labelID The label ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDocumentsTemplatesIDLabelsID
   */
  deleteDocumentsTemplatesIDLabelsID(
    templateID: string,
    labelID: string,
    request?: DeleteDocumentsTemplatesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/documents/templates/${templateID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
}
