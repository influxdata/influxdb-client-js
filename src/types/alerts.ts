import {
  DeadmanCheck,
  ThresholdCheck as ThresholdCheckGen,
  GreaterThreshold as GreaterThresholdGen,
  LesserThreshold as LesserThresholdGen,
  RangeThreshold as RangeThresholdGen,
  SlackNotificationRule,
  PagerDutyNotificationRule,
  SMTPNotificationRule,
  Links,
} from '../api'

export interface ThresholdCheck extends ThresholdCheckGen {
  thresholds: Array<
    GreaterThresholdGen | LesserThresholdGen | RangeThresholdGen
  >
}

export type Check = DeadmanCheck | ThresholdCheck

export interface Checks {
  checks: Array<Check>
  links: Links
}

export type NotificationRule =
  | SlackNotificationRule
  | PagerDutyNotificationRule
  | SMTPNotificationRule

export interface NotificationRules {
  notificationRules: Array<NotificationRule>
  links: Links
}
