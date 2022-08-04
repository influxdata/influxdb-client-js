import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostWriteRequest {
  /** Data in line protocol format.

To send compressed data, do the following:

  1. Use [GZIP](https://www.gzip.org/) to compress the line protocol data.
  2. In your request, send the compressed data and the
     `Content-Encoding: gzip` header.

#### Related guides

- [Best practices for optimizing writes](https://docs.influxdata.com/influxdb/v2.2/write-data/best-practices/optimize-writes/).
 */
  body: string
  /** The destination organization for writes.
The database writes all points in the batch to this organization.
If you provide both `orgID` and `org` parameters, `org` takes precedence.
 */
  org: string
  /** The ID of the destination organization for writes.
If both `orgID` and `org` are specified, `org` takes precedence.
 */
  orgID?: string
  /** The destination bucket for writes. */
  bucket: string
  /** The precision for unix timestamps in the line protocol batch. */
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
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostWrite }
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
