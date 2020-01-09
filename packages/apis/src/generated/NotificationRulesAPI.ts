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
  query: {
    offset?: number
    limit?: number
    /** Only show notification rules that belong to a specific organization ID. */
    orgID: string
    /** Only show notifications that belong to the specific check ID. */
    checkID?: string
    /** Only return notification rules that "would match" statuses which contain the tag key value pairs provided. */
    tag?: string
  }
}
export interface CreateNotificationRuleRequest {
  /** Notification rule to create */
  body: PostNotificationRule
}
export interface GetNotificationRulesIDRequest {}
export interface PutNotificationRulesIDRequest {
  /** Notification rule update to apply */
  body: NotificationRule
}
export interface PatchNotificationRulesIDRequest {
  /** Notification rule update to apply */
  body: NotificationRuleUpdate
}
export interface DeleteNotificationRulesIDRequest {}
export interface GetNotificationRulesIDLabelsRequest {}
export interface PostNotificationRuleIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteNotificationRulesIDLabelsIDRequest {}
export interface GetNotificationRulesIDQueryRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRules
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationRule
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationRulesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationRulesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationRulesID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationRuleIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationRulesIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesIDQuery
 */
export class NotificationRulesAPI extends APIBase {
  /**
   * Creates NotificationRulesAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all notification rules.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRules
   */
  getNotificationRules(
    request: GetNotificationRulesRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRules> {
    return this.request(
      'GET',
      `/api/v2/notificationRules${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Add a notification rule.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationRule
   */
  createNotificationRule(
    request: CreateNotificationRuleRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.request(
      'POST',
      `/api/v2/notificationRules`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesID
   */
  getNotificationRulesID(
    ruleID: string,
    request?: GetNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.request(
      'GET',
      `/api/v2/notificationRules/${ruleID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationRulesID
   */
  putNotificationRulesID(
    ruleID: string,
    request: PutNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.request(
      'PUT',
      `/api/v2/notificationRules/${ruleID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationRulesID
   */
  patchNotificationRulesID(
    ruleID: string,
    request: PatchNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationRule> {
    return this.request(
      'PATCH',
      `/api/v2/notificationRules/${ruleID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationRulesID
   */
  deleteNotificationRulesID(
    ruleID: string,
    request?: DeleteNotificationRulesIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationRules/${ruleID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesIDLabels
   */
  getNotificationRulesIDLabels(
    ruleID: string,
    request?: GetNotificationRulesIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/notificationRules/${ruleID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a notification rule.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationRuleIDLabels
   */
  postNotificationRuleIDLabels(
    ruleID: string,
    request: PostNotificationRuleIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/notificationRules/${ruleID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete label from a notification rule.
   * @param ruleID The notification rule ID.
   * @param labelID The ID of the label to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationRulesIDLabelsID
   */
  deleteNotificationRulesIDLabelsID(
    ruleID: string,
    labelID: string,
    request?: DeleteNotificationRulesIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationRules/${ruleID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get a notification rule query.
   * @param ruleID The notification rule ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationRulesIDQuery
   */
  getNotificationRulesIDQuery(
    ruleID: string,
    request?: GetNotificationRulesIDQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxResponse> {
    return this.request(
      'GET',
      `/api/v2/notificationRules/${ruleID}/query`,
      request,
      requestOptions
    )
  }
}
