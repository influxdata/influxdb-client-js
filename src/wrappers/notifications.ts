import {NotificationRulesApi, NotificationRuleUpdate} from '../api'
import {NotificationRule, ServiceOptions, NotificationRules} from '../types'
import {addLabelDefaults} from './labels'
import {AxiosResponse} from 'axios'

const addDefaults = (notificationRule: NotificationRule): NotificationRule => ({
  ...notificationRule,
  labels: (notificationRule.labels || []).map(addLabelDefaults),
})

const addDefaultsToAll = (
  notificationRule: NotificationRule[]
): NotificationRule[] => notificationRule.map(addDefaults)

export default class {
  private service: NotificationRulesApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new NotificationRulesApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<NotificationRule> {
    const {data} = (await this.service.getNotificationRulesID(
      id,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<NotificationRule>

    return addDefaults(data)
  }

  public async getAll(orgID: string): Promise<NotificationRule[]> {
    const {
      data: {notificationRules},
    } = (await this.service.getNotificationRules(
      orgID,
      undefined,
      undefined,
      undefined,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<NotificationRules>

    return addDefaultsToAll(notificationRules || [])
  }

  public async getAllForCheck(
    orgID: string,
    checkID: string
  ): Promise<NotificationRule[]> {
    const {
      data: {notificationRules},
    } = (await this.service.getNotificationRules(
      orgID,
      undefined,
      undefined,
      checkID,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<NotificationRules>

    return addDefaultsToAll(notificationRules || [])
  }

  public async create(
    notificationRule: NotificationRule
  ): Promise<NotificationRule> {
    const {data} = (await this.service.createNotificationRule(
      notificationRule,
      this.serviceOptions
    )) as AxiosResponse<NotificationRule>

    return addDefaults(data)
  }

  public async update(
    id: string,
    notificationRule: Partial<NotificationRuleUpdate>
  ): Promise<NotificationRule> {
    const {data} = (await this.service.patchNotificationRulesID(
      id,
      notificationRule,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<NotificationRule>

    return addDefaults(data)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.deleteNotificationRulesID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }
}
