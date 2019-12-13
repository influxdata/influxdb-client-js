import Cancellable from './util/Cancellable'

/**
 * Observes communication with the server.
 */
export interface CommunicationObserver<T> {
  /**
   * Data chunk received, can be called mupliple times.
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
   * Setups cancelllable for this communication.
   */
  useCancellable?: (cancellable: Cancellable) => void
}

/**
 * Options that can be send when sending a message.
 */
export interface SendOptions {
  method: string
  maxRetries?: number
  headers?: {[key: string]: string}
}

/**
 * Simpified platform-neutral transport layer for communication with influx DB.
 */
export interface Transport {
  /**
   * Sends data to server and receive communication events via communication callbacks.
   *
   * @param path HTTP path
   * @param body  message body
   * @param options  send options
   * @param callbacks communication callbacks with chunks of any type
   */
  send(
    path: string,
    body: string,
    options?: Partial<SendOptions>,
    callbacks?: Partial<CommunicationObserver<any>>
  ): void
}
