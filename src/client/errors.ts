export interface RetriableDecision {
  canRetry(): boolean
  /**
   * Get the delay in millisecond to retry the action. Can return negative number
   * to let the implementation decide the delay.
   */
  retryAfter(): number
}

export function isStatusCodeRetriable(statusCode: number): boolean {
  return statusCode == 429 || statusCode == 503
}

export class IllegalArgumentError extends Error {
  constructor(message: string) {
    super(message)
  }
}

/**
 * A general HTTP error.
 */
export class HttpError extends Error implements RetriableDecision {
  private _retryAfter: number

  constructor(
    readonly statusCode: number,
    readonly statusMessage: string | undefined,
    readonly body?: string,
    retryAfter?: string | undefined
  ) {
    super()
    if (body) {
      this.message = `A ${statusCode} ${statusMessage} error occurred: ${body}`
    } else {
      this.message = `${statusCode} ${statusMessage}`
    }
    if (typeof retryAfter === 'string') {
      // try to parse the supplied number as milliseconds
      this._retryAfter = parseInt(retryAfter)
    } else {
      this._retryAfter = NaN
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
export function canRetryHttpCall(error: Error): boolean {
  if (!error) {
    return false
  } else if (typeof (error as any).canRetry === 'function') {
    return !!((error as any).retryAfter as () => boolean)()
  } else if ((error as any).code && RETRY_CODES.includes((error as any).code)) {
    return true
  }
  return false
}

export class RequestTimedOutError extends Error implements RetriableDecision {
  constructor() {
    super()
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
  constructor() {
    super()
    this.message = 'Response aborted'
  }
  canRetry(): boolean {
    return true
  }
  retryAfter(): number {
    return -1
  }
}
