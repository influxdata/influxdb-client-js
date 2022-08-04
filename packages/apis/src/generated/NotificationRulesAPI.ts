import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  FluxResponse,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  NotificationRule,
  NotificationRuleUpdate,
  NotificationRules,
  PostNotificationRule,
} from './types'

export interface GetNotificationRulesRequest {
  offset?: number
  limit?: number
  /** Only show notification rules that belong to a specific organization ID. */
  orgID: string
  /** Only show notifications that belong to the specific check ID. */
  checkID?: string
  /** Only return notification rules that "would match" statuses which contain the tag key value pairs provided. */
  tag?: string
}
export interface CreateNotificationRuleRequest {
  /** Notification rule to create */
  body: PostNotificationRule
}
export interface GetNotificationRulesIDRequest {
  /** The notification rule ID. */
  ruleID: string
}
export interface PutNotificationRulesIDRequest {
  /** The notification rule ID. */
  ruleID: string
  /** Notification rule update to apply */
  body: NotificationRule
}
export interface PatchNotificationRulesIDRequest {
  /** The notification rule ID. */
  ruleID: string
  /** Notification rule update to apply */
  body: NotificationRuleUpdate
}
export interface DeleteNotificationRulesIDRequest {
  /** The notification rule ID. */
  ruleID: string
}
export interface GetNotificationRulesIDLabelsRequest {
  /** The notification rule ID. */
  ruleID: string
}
export interface PostNotificationRuleIDLabelsRequest {
  /** The notification rule ID. */
  ruleID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteNotificationRulesIDLabelsIDRequest {
  /** The notification rule ID. */
  ruleID: string
  /** The ID of the label to delete. */
  labelID: string
}
export interface GetNotificationRulesIDQueryRequest {
  /** The notification rule ID. */
  ruleID: string
}
/**
 * NotificationRules API
 */
export class NotificationRulesAPI {
  // internal
  private base: APIBase

  /**
   * Creates NotificationRulesAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all notification rules.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetNotificationRules }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getNotificationRules(
    request: GetNotificationRulesRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRules> {
    return this.base.request(
      'GET',
      `/api/v2/notificationRules${this.base.queryString(request, [
        'offset',
        'limit',
        'orgID',
        'checkID',
        'tag',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Add a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/CreateNotificationRule }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  createNotificationRule(
    request: CreateNotificationRuleRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.base.request(
      'POST',
      `/api/v2/notificationRules`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetNotificationRulesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getNotificationRulesID(
    request: GetNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.base.request(
      'GET',
      `/api/v2/notificationRules/${request.ruleID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PutNotificationRulesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putNotificationRulesID(
    request: PutNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.base.request(
      'PUT',
      `/api/v2/notificationRules/${request.ruleID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PatchNotificationRulesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchNotificationRulesID(
    request: PatchNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.base.request(
      'PATCH',
      `/api/v2/notificationRules/${request.ruleID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteNotificationRulesID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteNotificationRulesID(
    request: DeleteNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/notificationRules/${request.ruleID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetNotificationRulesIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getNotificationRulesIDLabels(
    request: GetNotificationRulesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/notificationRules/${request.ruleID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/PostNotificationRuleIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postNotificationRuleIDLabels(
    request: PostNotificationRuleIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/notificationRules/${request.ruleID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete label from a notification rule.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/DeleteNotificationRulesIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteNotificationRulesIDLabelsID(
    request: DeleteNotificationRulesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/notificationRules/${request.ruleID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve a notification rule query.
   * See {@link https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetNotificationRulesIDQuery }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getNotificationRulesIDQuery(
    request: GetNotificationRulesIDQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxResponse> {
    return this.base.request(
      'GET',
      `/api/v2/notificationRules/${request.ruleID}/query`,
      request,
      requestOptions
    )
  }
}
