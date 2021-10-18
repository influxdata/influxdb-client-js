import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostWriteRequest {
  /** Data in line protocol format. */
  body: string
  /** The parameter value specifies the destination organization for writes. The database writes all points in the batch to this organization. If you provide both `orgID` and `org` parameters, `org` takes precedence. */
  org: string
  /** The parameter value specifies the ID of the destination organization for writes. If both `orgID` and `org` are specified, `org` takes precedence. */
  orgID?: string
  /** The destination bucket for writes. */
  bucket: string
  /** The precision for the unix timestamps within the body line-protocol. */
  precision?: any
}
/**
 * Write API
 */
export class WriteAPI {
  // internal
  private base: APIBase

  /**
   * Creates WriteAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Write data.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postWrite(
    request: PostWriteRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/write${this.base.queryString(request, [
        'org',
        'orgID',
        'bucket',
        'precision',
      ])}`,
      request,
      requestOptions,
      'text/plain'
    )
  }
}
