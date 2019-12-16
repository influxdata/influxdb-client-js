export interface RetriableDecision {
  canRetry(): boolean
  /**
   * Get the delay in millisecond to retry the action. Can return negative number
   * to let the implementation decide the delay.
   */
  retryAfter(): number
}

export function isStatusCodeRetriable(statusCode: number): boolean {
  return statusCode === 429 || statusCode === 503
}

export class IllegalArgumentError extends Error {
  /* istanbul ignore next */
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, IllegalArgumentError.prototype)
  }
}

/**
 * A general HTTP error.
 */
export class HttpError extends Error implements RetriableDecision {
  private _retryAfter: number

  /* istanbul ignore next because of super() not being covered*/
  constructor(
    readonly statusCode: number,
    readonly statusMessage: string | undefined,
    readonly body?: string,
    retryAfter?: string | undefined
  ) {
    super()
    Object.setPrototypeOf(this, HttpError.prototype)
    if (body) {
      this.message = `${statusCode} ${statusMessage} : ${body}`
    } else {
      this.message = `${statusCode} ${statusMessage}`
    }
    this.setRetryAfter(retryAfter)
  }

  private setRetryAfter(retryAfter?: string | undefined): void {
    if (typeof retryAfter === 'string') {
      // try to parse the supplied number as milliseconds
      if (/^[0-9]+$/.test(retryAfter)) {
        this._retryAfter = parseInt(retryAfter)
      } else {
        this._retryAfter = -1
      }
    } else {
      this._retryAfter = -1
    }
  }

  canRetry(): boolean {
    return isStatusCodeRetriable(this.statusCode)
  }
  retryAfter(): number {
    return this._retryAfter
  }
}

//see https://nodejs.org/api/errors.html
const RETRY_CODES = [
  'ECONNRESET',
  'ENOTFOUND',
  'ESOCKETTIMEDOUT',
  'ETIMEDOUT',
  'ECONNREFUSED',
  'EHOSTUNREACH',
  'EPIPE',
]

/**
 * Tests the error to know whether a possible HTTP call can be retried.
 * @param error Test whether the givver e
 */
export function canRetryHttpCall(error: any): boolean {
  if (!error) {
    return false
  } else if (typeof (error as any).canRetry === 'function') {
    return !!((error as any).canRetry as () => boolean)()
  } else if ((error as any).code && RETRY_CODES.includes((error as any).code)) {
    return true
  }
  return false
}

/**
 * Gets retry delay from the supplied error, possibly using random number up to retryJitter.
 */
export function getRetryDelay(error: Error, retryJitter?: number): number {
  if (!error) {
    return 0
  } else {
    let retVal
    if (typeof (error as any).retryAfter === 'function') {
      const delay = ((error as any).retryAfter as () => number)()
      if (delay < 0) {
        retVal = 1
      } else {
        return delay
      }
    } else {
      retVal = 1
    }
    if (retryJitter && retryJitter > 0) {
      return retVal + Math.round(Math.random() * retryJitter)
    } else {
      return retVal
    }
  }
}

export class RequestTimedOutError extends Error implements RetriableDecision {
  /* istanbul ignore next because of super() not being covered */
  constructor() {
    super()
    Object.setPrototypeOf(this, RequestTimedOutError.prototype)
    this.message = 'Request timed out'
  }
  canRetry(): boolean {
    return true
  }
  retryAfter(): number {
    return -1
  }
}

export class ResponseAbortedError extends Error implements RetriableDecision {
  /* istanbul ignore next because of super() not being covered */
  constructor() {
    super()
    Object.setPrototypeOf(this, ResponseAbortedError.prototype)
    this.message = 'Response aborted'
  }
  canRetry(): boolean {
    return true
  }
  retryAfter(): number {
    return -1
  }
}
