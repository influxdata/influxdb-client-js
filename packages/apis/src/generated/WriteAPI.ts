import {APIBase, RequestOptions} from '../APIBase'

export interface PostWriteRequest {
  /** Line protocol body */
  body: string
  /** Specifies the destination organization for writes. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence. */
  org: string
  /** Specifies the ID of the destination organization for writes. If both `orgID` and `org` are specified, `org` takes precedence. */
  orgID?: string
  /** The destination bucket for writes. */
  bucket: string
  /** The precision for the unix timestamps within the body line-protocol. */
  precision?: any
}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite
 */
export class WriteAPI extends APIBase {
  /**
   * Creates WriteAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Write time series data into InfluxDB.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostWrite
   * @param request
   * @return promise of response
   */
  postWrite(
    request: PostWriteRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'POST',
      `/api/v2/write${this.queryString(request, [
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
