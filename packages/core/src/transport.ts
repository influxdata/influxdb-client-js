import {CommunicationObserver, ResponseStartedFn} from './results'
import {ChunkCombiner} from './results/chunkCombiner'
/**
 * Options for sending a request message.
 */
export interface SendOptions {
  /** HTTP method (POST, PUT, GET, PATCH ...) */
  method: string
  /** Request HTTP headers. */
  headers?: {[key: string]: string}
  /** When specified, message body larger than the treshold is gzipped  */
  gzipThreshold?: number
  /** Abort signal */
  signal?: AbortSignal
}

/**
 * Simpified platform-neutral transport layer for communication with InfluxDB.
 */
export interface Transport {
  /**
   * Send data to the server and receive communication events via callbacks.
   *
   * @param path - HTTP request path
   * @param requestBody - HTTP request body
   * @param options  - send options
   * @param callbacks - communication callbacks to received data in Uint8Array
   */
  send(
    path: string,
    requestBody: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<Uint8Array>>
  ): void

  /**
   * Sends data to the server and receives decoded result. The type of the result depends on
   * response's content-type (deserialized json, text).
  
   * @param path - HTTP request path
   * @param requestBody - request body
   * @param options - send options
   */
  request(
    path: string,
    body: any,
    options: SendOptions,
    responseStarted?: ResponseStartedFn
  ): Promise<any>

  /**
   * Combines response chunks to create a single response object.
   */
  readonly chunkCombiner: ChunkCombiner
}
