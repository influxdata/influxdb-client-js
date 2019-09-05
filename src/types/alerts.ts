import {
  DeadmanCheck as DeadmanCheckGen,
  ThresholdCheck as ThresholdCheckGen,
  GreaterThreshold as GreaterThresholdGen,
  LesserThreshold as LesserThresholdGen,
  RangeThreshold as RangeThresholdGen,
  SlackNotificationRule as SlackNotificationRuleGen,
  SlackNotificationRuleBase,
  PagerDutyNotificationRule as PagerDutyNotificationRuleGen,
  SMTPNotificationRule as SMTPNotificationRuleGen,
  Links,
  PagerDutyNotificationRuleBase,
  SMTPNotificationRuleBase,
} from '../api'

export interface GreaterThreshold extends GreaterThresholdGen {
  type: GreaterThresholdGen.TypeEnum.Greater
}

export interface LesserThreshold extends LesserThresholdGen {
  type: LesserThresholdGen.TypeEnum.Lesser
}

export interface RangeThreshold extends RangeThresholdGen {
  type: RangeThresholdGen.TypeEnum.Range
}

export type CheckThreshold = GreaterThreshold | LesserThreshold | RangeThreshold

export interface ThresholdCheck extends ThresholdCheckGen {
  type: ThresholdCheckGen.TypeEnum.Threshold
  thresholds: Array<CheckThreshold>
}

export interface DeadmanCheck extends DeadmanCheckGen {
  type: DeadmanCheckGen.TypeEnum.Deadman
}

export type Check = DeadmanCheck | ThresholdCheck

export interface Checks {
  checks: Array<Check>
  links: Links
}

export interface SlackNotificationRule extends SlackNotificationRuleGen {
  type: SlackNotificationRuleBase.TypeEnum.Slack
}

export interface PagerDutyNotificationRule
  extends PagerDutyNotificationRuleGen {
  type: PagerDutyNotificationRuleBase.TypeEnum.Pagerduty
}

export interface SMTPNotificationRule extends SMTPNotificationRuleGen {
  type: SMTPNotificationRuleBase.TypeEnum.Smtp
}

export type NotificationRule =
  | SlackNotificationRule
  | PagerDutyNotificationRule
  | SMTPNotificationRule

export interface NotificationRules {
  notificationRules: Array<NotificationRule>
  links: Links
}
