import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {DeletePredicateRequest} from './types'

export interface PostDeleteRequest {
  /** Time range parameters and an optional **delete predicate expression**.

To select points to delete within the specified time range, pass a
**delete predicate expression** in the `predicate` property of the request body.
If you don't pass a `predicate`, InfluxDB deletes all data with timestamps
in the specified time range.

#### Related guides

- [Delete data](https://docs.influxdata.com/influxdb/v2.3/write-data/delete-data/).
- Learn how to use [delete predicate syntax](https://docs.influxdata.com/influxdb/v2.3/reference/syntax/delete-predicate/).
 */
  body: DeletePredicateRequest
  /** The organization to delete data from.
If you pass both `orgID` and `org`, they must both be valid.

#### InfluxDB Cloud

- Doesn't require `org` or `orgID`.
- Deletes data from the bucket in the organization associated with the authorization (API token).

#### InfluxDB OSS

- Requires either `org` or `orgID`.
 */
  org?: string
  /** The name or ID of the bucket to delete data from.
If you pass both `bucket` and `bucketID`, `bucketID` takes precedence.
 */
  bucket?: string
  /** The ID of the organization to delete data from.
If you pass both `orgID` and `org`, they must both be valid.

#### InfluxDB Cloud

- Doesn't require `org` or `orgID`.
- Deletes data from the bucket in the organization associated with the authorization (API token).

#### InfluxDB OSS

- Requires either `org` or `orgID`.
 */
  orgID?: string
  /** The ID of the bucket to delete data from.
If you pass both `bucket` and `bucketID`, `bucketID` takes precedence.
 */
  bucketID?: string
}
/**
 * Delete API
 */
export class DeleteAPI {
  // internal
  private base: APIBase

  /**
   * Creates DeleteAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Delete data.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostDelete }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDelete(
    request: PostDeleteRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/delete${this.base.queryString(request, [
        'org',
        'bucket',
        'orgID',
        'bucketID',
      ])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
