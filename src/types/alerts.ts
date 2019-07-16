import {
  DeadmanCheck,
  ThresholdCheck as ThresholdCheckGen,
  GreaterThreshold as GreaterThresholdGen,
  LesserThreshold as LesserThresholdGen,
  RangeThreshold as RangeThresholdGen,
  SlackNotificationRule,
  PagerDutyNotificationRule,
  SMTPNotificationRule,
} from '../api'

export interface ThresholdCheck extends ThresholdCheckGen {
  thresholds: Array<
    GreaterThresholdGen | LesserThresholdGen | RangeThresholdGen
  >
}

export type Check = DeadmanCheck | ThresholdCheck

export type NotificationRule =
  | SlackNotificationRule
  | PagerDutyNotificationRule
  | SMTPNotificationRule
