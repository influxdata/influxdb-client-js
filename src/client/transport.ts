/** Informs about changes in the communication  */
export interface CommunicationObserver {
  /**
   * Data chunk received, can be called mupliple times.
   */
  next(data: any): void
  /**
   * An error message was received.
   */
  error(error: Error): void
  /**
   * Response was fully read.
   */
  complete(): void
}

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

export interface Transport {
  /**
   * Sends data to server and receive communication events via communication callbacks.
   *
   * @param path HTTP path
   * @param headers HTTP headers
   * @param method HTTP method
   * @param body  message body
   * @param callbacks communication callbacks
   * @return a handle that can cancel the communication
   */
  send(
    path: string,
    headers: {[key: string]: string},
    method?: string,
    body?: string,
    callbacks?: Partial<CommunicationObserver>
  ): Cancellable
}
