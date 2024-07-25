import {HttpHeaders} from './results'

/**
 * Strategy for calculating retry delays.
 */
export interface RetryDelayStrategy {
  /**
   * Returns delay for a next retry
   * @param error - reason for retrying
   * @param failedAttempts - a count of already failed attempts, 1 being the first
   * @returns milliseconds to wait before retrying
   */
  nextDelay(error?: Error, failedAttempts?: number): number
  /** Implementation should reset its state, this is mandatory to call upon success.  */
  success(): void
}

/**
 * Interface for errors to inform that an associated operation can be retried.
 */
export interface RetriableDecision {
  /**
   * Informs whether this can be retried.
   */
  canRetry(): boolean
  /**
   * Get the delay in milliseconds to retry the action.
   * @returns 0 to let the implementation decide, miliseconds delay otherwise
   */
  retryAfter(): number
}

const retriableStatusCodes = [404, 408, 425, 429, 500, 502, 503, 504]
/** isStatusCodeRetriable checks whether the supplied HTTP status code is retriable. */
export function isStatusCodeRetriable(statusCode: number): boolean {
  return retriableStatusCodes.includes(statusCode)
}

/** IllegalArgumentError is thrown when illegal argument is supplied. */
export class IllegalArgumentError extends Error {
  /* istanbul ignore next */
  constructor(message: string) {
    super(message)
    this.name = 'IllegalArgumentError'
    Object.setPrototypeOf(this, IllegalArgumentError.prototype)
  }
}

/**
 * A general HTTP error.
 */
export class HttpError extends Error implements RetriableDecision {
  private _retryAfter: number
  /** application error code, when available */
  public code: string | undefined
  /** json error response */
  public json: any

  public headers?: HttpHeaders | undefined

  /* istanbul ignore next because of super() not being covered*/
  constructor(
    readonly statusCode: number,
    readonly statusMessage: string | undefined,
    readonly body?: string,
    retryAfter?: string | undefined | null,
    readonly contentType?: string | undefined | null,
    message?: string,
    headers?: HttpHeaders | undefined
  ) {
    super()
    Object.setPrototypeOf(this, HttpError.prototype)

    this.headers = headers

    if (message) {
      this.message = message
    } else if (body) {
      if (contentType?.startsWith('application/json')) {
        try {
          this.json = JSON.parse(body)
          this.message = this.json.message
          this.code = this.json.code
        } catch (e) {
          // silently ignore, body string is still available
        }
      }
      if (!this.message) {
        this.message = `${statusCode} ${statusMessage} : ${body}`
      }
    } else {
      this.message = `${statusCode} ${statusMessage}`
    }
    this.name = 'HttpError'
    this.setRetryAfter(retryAfter)
  }

  private setRetryAfter(retryAfter?: string | undefined | null): void {
    if (typeof retryAfter === 'string') {
      // try to parse the supplied number as milliseconds
      if (/^[0-9]+$/.test(retryAfter)) {
        this._retryAfter = parseInt(retryAfter)
      } else {
        this._retryAfter = 0
      }
    } else {
      this._retryAfter = 0
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
 * Tests the error in order to know if an HTTP call can be retried.
 * @param error - error to test
 * @returns true for a retriable error
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
export function getRetryDelay(error?: Error, retryJitter?: number): number {
  if (!error) {
    return 0
  } else {
    let retVal
    if (typeof (error as any).retryAfter === 'function') {
      return ((error as any).retryAfter as () => number)()
    } else {
      retVal = 0
    }
    if (retryJitter && retryJitter > 0) {
      return retVal + Math.round(Math.random() * retryJitter)
    } else {
      return retVal
    }
  }
}

/** RequestTimedOutError indicates request timeout in the communication with the server */
export class RequestTimedOutError extends Error implements RetriableDecision {
  /* istanbul ignore next because of super() not being covered */
  constructor() {
    super()
    Object.setPrototypeOf(this, RequestTimedOutError.prototype)
    this.name = 'RequestTimedOutError'
    this.message = 'Request timed out'
  }
  canRetry(): boolean {
    return true
  }
  retryAfter(): number {
    return 0
  }
}

/** AbortError indicates that the communication with the server was aborted */
export class AbortError extends Error implements RetriableDecision {
  /* istanbul ignore next because of super() not being covered */
  constructor() {
    super()
    this.name = 'AbortError'
    Object.setPrototypeOf(this, AbortError.prototype)
    this.message = 'Response aborted'
  }
  canRetry(): boolean {
    return true
  }
  retryAfter(): number {
    return 0
  }
}
