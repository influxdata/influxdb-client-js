import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostWriteRequest {
  /** Data in line protocol format.

To send compressed data, do the following:

  1. Use [GZIP](https://www.gzip.org/) to compress the line protocol data.
  2. In your request, send the compressed data and the
     `Content-Encoding: gzip` header.

#### Related guides

- [Best practices for optimizing writes](https://docs.influxdata.com/influxdb/v2.3/write-data/best-practices/optimize-writes/).
 */
  body: string
  /** The destination organization for writes.
InfluxDB writes all points in the batch to this organization.
If you pass both `orgID` and `org`, they must both be valid.

#### InfluxDB Cloud

- Doesn't require `org` or `orgID`.
- Writes to the bucket in the organization associated with the authorization (API token).

#### InfluxDB OSS

- Requires either `org` or `orgID`.
- InfluxDB writes all points in the batch to this organization.
 */
  org: string
  /** The ID of the destination organization for writes.
If you pass both `orgID` and `org`, they must both be valid.

#### InfluxDB Cloud

- Doesn't require `org` or `orgID`.
- Writes to the bucket in the organization associated with the authorization (API token).


#### InfluxDB OSS

- Requires either `org` or `orgID`.
- InfluxDB writes all points in the batch to this organization.
 */
  orgID?: string
  /** The destination bucket for writes.
InfluxDB writes all points in the batch to this bucket.
 */
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
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostWrite }
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
