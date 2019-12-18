import {getRetryDelay, RetryDelayStrategy} from '../errors'

export interface BuiltinRetryStrategyOptions {
  retryJitter: number
  minDelay: number
  maxDelay: number
}

export const DEFAULT_BuiltinStrategyConfig: BuiltinRetryStrategyOptions = {
  retryJitter: 500,
  minDelay: 1000,
  maxDelay: 15000,
}

/**
 * Applies a variant of exponential backoff with initial and max delay and a random
 * jitter delay. It also respects `retry delay` when specified together with an error.
 */
export class RetryStrategyImpl implements RetryDelayStrategy {
  options: BuiltinRetryStrategyOptions
  currentDelay: number | undefined

  constructor(options?: Partial<BuiltinRetryStrategyOptions>) {
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
