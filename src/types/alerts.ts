import {
  DeadmanCheck as DeadmanCheckGen,
  ThresholdCheck as ThresholdCheckGen,
  CheckType,
  GreaterThreshold as GreaterThresholdGen,
  LesserThreshold as LesserThresholdGen,
  RangeThreshold as RangeThresholdGen,
  ThresholdType,
  SlackNotificationRule as SlackNotificationRuleGen,
  PagerDutyNotificationRule as PagerDutyNotificationRuleGen,
  SMTPNotificationRule as SMTPNotificationRuleGen,
  NotificationRuleType,
  Links,
} from '../api'

export interface GreaterThreshold extends GreaterThresholdGen {
  type: ThresholdType.Greater
}

export interface LesserThreshold extends LesserThresholdGen {
  type: ThresholdType.Lesser
}

export interface RangeThreshold extends RangeThresholdGen {
  type: ThresholdType.Range
}

export type CheckThreshold = GreaterThreshold | LesserThreshold | RangeThreshold

export interface ThresholdCheck extends ThresholdCheckGen {
  type: CheckType.Threshold
  thresholds: Array<CheckThreshold>
}

export interface DeadmanCheck extends DeadmanCheckGen {
  type: CheckType.Deadman
}

export type Check = DeadmanCheck | ThresholdCheck

export interface Checks {
  checks: Array<Check>
  links: Links
}

export interface SlackNotificationRule extends SlackNotificationRuleGen {
  type: NotificationRuleType.Slack
}

export interface PagerDutyNotificationRule
  extends PagerDutyNotificationRuleGen {
  type: NotificationRuleType.Pagerduty
}

export interface SMTPNotificationRule extends SMTPNotificationRuleGen {
  type: NotificationRuleType.Smtp
}

export type NotificationRule =
  | SlackNotificationRule
  | PagerDutyNotificationRule
  | SMTPNotificationRule

export interface NotificationRules {
  notificationRules: Array<NotificationRule>
  links: Links
}
