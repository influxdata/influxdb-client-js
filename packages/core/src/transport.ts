import {CommunicationObserver} from './results'
import {ChunkCombiner} from './results/chunkCombiner'
/**
 * Options for sending a request message.
 */
export interface SendOptions {
  method: string
  headers?: {[key: string]: string}
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
  request(path: string, body: any, options: SendOptions): Promise<any>

  /**
   * Combines response chunks to create a single response object.
   */
  readonly chunkCombiner: ChunkCombiner
}
