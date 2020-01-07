/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Transport, SendOptions, CommunicationObserver} from '../../transport'
import pureJsChunkCombiner from '../pureJsChunkCombiner'
import {ConnectionOptions} from '../../options'

/**
 * Transport layer that use browser fetch.
 */
export default class FetchTransport implements Transport {
  // @ts-ignore
  constructor(private _connectionOptions: ConnectionOptions) {}
  send(
    path: string,
    requestBody: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<Uint8Array>> | undefined
  ): void {
    // TODO implement
    throw new Error('Method not implemented.')
  }
  request(path: string, body: any, options: SendOptions): Promise<any> {
    // TODO implement
    throw new Error('Method not implemented.')
  }
  chunkCombiner = pureJsChunkCombiner
}
