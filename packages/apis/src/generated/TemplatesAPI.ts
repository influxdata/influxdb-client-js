import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Template,
  TemplateApply,
  TemplateExportByID,
  TemplateExportByName,
  TemplateSummary,
} from './types'

export interface ApplyTemplateRequest {
  /** entity body */
  body: TemplateApply
}
export interface ExportTemplateRequest {
  /** Export resources as an InfluxDB template. */
  body: TemplateExportByID | TemplateExportByName
}
/**
 * Templates API
 */
export class TemplatesAPI {
  // internal
  private base: APIBase

  /**
   * Creates TemplatesAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Apply or dry-run a template.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/ApplyTemplate }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  applyTemplate(
    request: ApplyTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<TemplateSummary> {
    return this.base.request(
      'POST',
      `/api/v2/templates/apply`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Export a new template.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/ExportTemplate }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  exportTemplate(
    request: ExportTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<Template> {
    return this.base.request(
      'POST',
      `/api/v2/templates/export`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
