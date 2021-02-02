import {Cancellable} from './Cancellable'
/**
 * Type of HTTP headers.
 */
export type Headers = {[header: string]: string | string[] | undefined}

/**
 * Informs about a start of response processing.
 * @param headers - response HTTP headers
 * @param statusCode - response status code
 */
export type ResponseStartedFn = (headers: Headers, statusCode?: number) => void

/**
 * Observes communication with the server.
 */
export interface CommunicationObserver<T> {
  /**
   * Data chunk received, can be called mupliple times.
   * @param data - data
   */
  next(data: T): void
  /**
   * Communication ended with an error.
   */
  error(error: Error): void
  /**
   * Communication was successful.
   */
  complete(): void
  /**
   * Informs about a start of response processing.
   */
  responseStarted?: ResponseStartedFn
  /**
   * Setups cancelllable for this communication.
   */
  useCancellable?: (cancellable: Cancellable) => void
}
