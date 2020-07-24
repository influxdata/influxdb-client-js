import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {DeletePredicateRequest} from './types'

export interface PostDeleteRequest {
  /** Predicate delete request */
  body: DeletePredicateRequest
  /** Specifies the organization to delete data from. */
  org?: string
  /** Specifies the bucket to delete data from. */
  bucket?: string
  /** Specifies the organization ID of the resource. */
  orgID?: string
  /** Specifies the bucket ID to delete data from. */
  bucketID?: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDelete
 */
export class DeleteAPI extends APIBase {
  /**
   * Creates DeleteAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Delete time series data from InfluxDB.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDelete
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postDelete(
    request: PostDeleteRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'POST',
      `/api/v2/delete${this.queryString(request, [
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
