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
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDelete
 */
export class DeleteAPI extends APIBase {
  /**
   * Creates DeleteAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Delete time series data from InfluxDB.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDelete
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
