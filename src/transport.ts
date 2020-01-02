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
 * Simpified platform-neutral data chunk manipulation.
 */
export interface ChunkCombiner {
  /**
   * Concatenates first and second chunk.
   * @param first chunk
   * @param second chunk
   * @return first + second
   */
  concat(first: Uint8Array, second: Uint8Array): Uint8Array

  /**
   * Converts chunk into a string.
   */
  toUtf8String(chunk: Uint8Array, start?: number, end?: number): string

  /**
   * Creates a new chunk from the supplied chunk.
   */
  copy(chunk: Uint8Array): Uint8Array
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

  /**
   * Returns operations for chunks emitted to the {@link send} method communication observer.
   */
  readonly chunkCombiner: ChunkCombiner
}
