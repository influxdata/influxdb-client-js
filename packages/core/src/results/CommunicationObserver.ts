import {Cancellable} from './Cancellable'
/**
 * Type of HTTP headers.
 */
export type HttpHeaders = {[header: string]: string | string[] | undefined}
export {HttpHeaders as Headers}

/**
 * Informs about a start of response processing.
 * @param headers - response HTTP headers
 * @param statusCode - response status code
 */
export type ResponseStartedFn = (
  headers: HttpHeaders,
  statusCode?: number
) => void

/**
 * Observes communication with the server.
 */
export interface CommunicationObserver<T> {
  /**
   * Data chunk received, can be called multiple times.
   * @param data - data
   * @returns when `false` value is returned and {@link CommunicationObserver#useResume} is defined,
   * future calls to `next` are paused until resume is called.
   */
  next(data: T): void | boolean
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
  /**
   * Setups a callback that resumes reading of next data, it is called whenever
   * {@link CommunicationObserver#next} returns `false`.
   *
   * @param resume - a function that will resume reading of next data when called
   */
  useResume?: (resume: () => void) => void
}
