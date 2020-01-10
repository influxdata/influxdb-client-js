import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  NotificationEndpoint,
  NotificationEndpointUpdate,
  NotificationEndpoints,
  PostNotificationEndpoint,
} from './types'

export interface GetNotificationEndpointsRequest {
  query: {
    offset?: number
    limit?: number
    /** Only show notification endpoints that belong to specific organization ID. */
    orgID: string
  }
}
export interface CreateNotificationEndpointRequest {
  /** Notification endpoint to create */
  body: PostNotificationEndpoint
}
export interface GetNotificationEndpointsIDRequest {}
export interface PutNotificationEndpointsIDRequest {
  /** A new notification endpoint to replace the existing endpoint with */
  body: NotificationEndpoint
}
export interface PatchNotificationEndpointsIDRequest {
  /** Check update to apply */
  body: NotificationEndpointUpdate
}
export interface DeleteNotificationEndpointsIDRequest {}
export interface GetNotificationEndpointsIDLabelsRequest {}
export interface PostNotificationEndpointIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteNotificationEndpointsIDLabelsIDRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpoints
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationEndpoint
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationEndpointsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationEndpointsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationEndpointIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsIDLabelsID
 */
export class NotificationEndpointsAPI extends APIBase {
  /**
   * Creates NotificationEndpointsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all notification endpoints.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpoints
   */
  getNotificationEndpoints(
    request: GetNotificationEndpointsRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoints> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Add a notification endpoint.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationEndpoint
   */
  createNotificationEndpoint(
    request: CreateNotificationEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'POST',
      `/api/v2/notificationEndpoints`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsID
   */
  getNotificationEndpointsID(
    endpointID: string,
    request?: GetNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints/${endpointID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationEndpointsID
   */
  putNotificationEndpointsID(
    endpointID: string,
    request: PutNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'PUT',
      `/api/v2/notificationEndpoints/${endpointID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationEndpointsID
   */
  patchNotificationEndpointsID(
    endpointID: string,
    request: PatchNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'PATCH',
      `/api/v2/notificationEndpoints/${endpointID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsID
   */
  deleteNotificationEndpointsID(
    endpointID: string,
    request?: DeleteNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationEndpoints/${endpointID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsIDLabels
   */
  getNotificationEndpointsIDLabels(
    endpointID: string,
    request?: GetNotificationEndpointsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints/${endpointID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationEndpointIDLabels
   */
  postNotificationEndpointIDLabels(
    endpointID: string,
    request: PostNotificationEndpointIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/notificationEndpoints/${endpointID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a notification endpoint.
   * @param endpointID The notification endpoint ID.
   * @param labelID The ID of the label to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsIDLabelsID
   */
  deleteNotificationEndpointsIDLabelsID(
    endpointID: string,
    labelID: string,
    request?: DeleteNotificationEndpointsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationEndpoints/${endpointID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
}
