import {getRetryDelay} from '../errors'

/**
 * Represents a strategy for calculating retry delays.
 */
export interface RetryStrategy {
  nextDelay(error?: Error): number
  success(): void
}

export interface BuiltinStrategyOptions {
  retryJitter: number
  minDelay: number
  maxDelay: number
}

export const DEFAULT_BuiltinStrategyConfig: BuiltinStrategyOptions = {
  retryJitter: 500,
  minDelay: 1000,
  maxDelay: 15000,
}

/**
 * Applies a variant of exponential backoff with initial max delay with a random
 * jitter delay and repects alsi retry after settings of supplied errors.
 */
export class RetryStrategyImpl implements RetryStrategy {
  options: BuiltinStrategyOptions
  currentDelay: number | undefined

  constructor(options?: Partial<BuiltinStrategyOptions>) {
    this.options = {...DEFAULT_BuiltinStrategyConfig, ...options}
    this.success()
  }

  nextDelay(error?: Error): number {
    const delay = getRetryDelay(error)
    if (delay && delay > 0) {
      return Math.min(
        delay + Math.round(Math.random() * this.options.retryJitter),
        this.options.maxDelay
      )
    } else {
      if (this.currentDelay) {
        this.currentDelay = Math.min(
          Math.max(this.currentDelay * 2, 1) +
            Math.round(Math.random() * this.options.retryJitter),
          this.options.maxDelay
        )
      } else {
        this.currentDelay =
          this.options.minDelay +
          Math.round(Math.random() * this.options.retryJitter)
      }
      return this.currentDelay
    }
  }
  success(): void {
    this.currentDelay = undefined
  }
}
