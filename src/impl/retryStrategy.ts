import {getRetryDelay, RetryDelayStrategy} from '../errors'
import {
  RetryDelayStrategyOptions,
  DEFAULT_RetryDelayStrategyOptions,
} from '../options'

/**
 * Applies a variant of exponential backoff with initial and max delay and a random
 * jitter delay. It also respects `retry delay` when specified together with an error.
 */
export class RetryStrategyImpl implements RetryDelayStrategy {
  options: RetryDelayStrategyOptions
  currentDelay: number | undefined

  constructor(options?: Partial<RetryDelayStrategyOptions>) {
    this.options = {...DEFAULT_RetryDelayStrategyOptions, ...options}
    this.success()
  }

  nextDelay(error?: Error): number {
    const delay = getRetryDelay(error)
    if (delay && delay > 0) {
      return Math.min(
        delay + Math.round(Math.random() * this.options.retryJitter),
        this.options.maxRetryDelay
      )
    } else {
      if (this.currentDelay) {
        this.currentDelay = Math.min(
          Math.max(this.currentDelay * 2, 1) +
            Math.round(Math.random() * this.options.retryJitter),
          this.options.maxRetryDelay
        )
      } else {
        this.currentDelay =
          this.options.minRetryDelay +
          Math.round(Math.random() * this.options.retryJitter)
      }
      return this.currentDelay
    }
  }
  success(): void {
    this.currentDelay = undefined
  }
}

/**
 * Creates a new instance of retry strategy
 * @param options retry options
 */
export function createRetryStrategy(
  options?: Partial<RetryDelayStrategyOptions>
): RetryDelayStrategy {
  return new RetryStrategyImpl(options)
}
