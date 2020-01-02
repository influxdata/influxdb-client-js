import Cancellable from './util/Cancellable'

export type Headers = {[header: string]: string | string[] | undefined}

/**
 * Observes communication with the server.
 */
export interface CommunicationObserver<T> {
  /**
   * Data chunk received, can be called mupliple times.
   * @param data data
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
   * @param headers response HTTP headers
   */
  responseStarted?: (headers: Headers) => void
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
  headers?: {[key: string]: string}
}

/**
 * Simpified platform-neutral transport layer for communication with influx DB.
 */
export interface Transport {
  /**
   * Send data to the server and receive communication events via callbacks.
   *
   * @param path HTTP path
   * @param requestBody  request body
   * @param options  send options
   * @param callbacks communication callbacks with chunks of any type
   */
  send(
    path: string,
    requestBody: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<any>>
  ): void

  /**
   * Sends data to the server and receives decoded result. The type of the result depends on
   * response's content-type (deserialized json, text).
  
   * @param path HTTP path
   * @param requestBody  request body
   * @param options  send options
   */
  request(path: string, body: any, options: SendOptions): Promise<any>
}
