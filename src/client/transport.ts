/** Informs about changes in the communication  */
/**
 * Cancellation of asynchronous query.
 */
export interface Cancellable {
  /**
   * Attempt to cancel execution of this query.
   */
  cancel(): void

  /**
   * Is communication canceled.
   */
  isCancelled(): boolean
}

/**
 * Let use observe change in the communication.
 */
export interface CommunicationObserver {
  /**
   * Data chunk received, can be called mupliple times.
   */
  next(data: any): void
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
 * Simpified transport layer for communication with influx DB.
 */
export interface Transport {
  /**
   * Sends data to server and receive communication events via communication callbacks.
   *
   * @param path HTTP path
   * @param headers HTTP headers
   * @param method HTTP method
   * @param body  message body
   * @param callbacks communication callbacks
   */
  send(
    path: string,
    body: string,
    options?: Partial<SendOptions>,
    callbacks?: Partial<CommunicationObserver>
  ): void
}
