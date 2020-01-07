/* eslint-disable @typescript-eslint/no-unused-vars */
import {Transport, SendOptions, CommunicationObserver} from '../../transport'
import pureJsChunkCombiner from '../pureJsChunkCombiner'
import {ConnectionOptions} from '../../options'
import {HttpError} from '../../errors'

function normalizeUrl(s: string): string {
  const match = s.match(/^(https?:\/\/[^:/?#]*(?::[0-9]+)?).*$/i)
  if (!match) throw new Error(`Unsupported url: ${s}`)
  return match[1]
}
/**
 * Transport layer that use browser fetch.
 */
export default class FetchTransport implements Transport {
  private defaultHeaders: {[key: string]: string}
  constructor(private connectionOptions: ConnectionOptions) {
    this.connectionOptions.url = normalizeUrl(connectionOptions.url)
    this.defaultHeaders = {
      'Content-Type': 'application/json; charset=utf-8',
    }
    if (this.connectionOptions.token) {
      this.defaultHeaders['Authorization'] =
        'Token ' + this.connectionOptions.token
    }
  }
  send(
    path: string,
    requestBody: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<Uint8Array>> | undefined
  ): void {
    // TODO implement
    throw new Error('Method not implemented.')
  }
  async request(path: string, body: any, options: SendOptions): Promise<any> {
    const requestConfig = {
      method: options.method,
      body: typeof body === 'string' ? body : JSON.stringify(body),
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      // allow to specify custom signal
      signal: (options as any).signal,
    }

    const response = await fetch(
      `${this.connectionOptions.url}${path}`,
      requestConfig
    )
    const {status, headers} = response
    const responseContentType = headers.get('Content-Type') || ''

    let data = undefined
    if (responseContentType.includes('json')) {
      data = await response.json()
    } else if (responseContentType.includes('text')) {
      data = await response.text()
    }
    if (status >= 300) {
      throw new HttpError(
        status,
        response.statusText,
        data,
        response.headers.get('Retry-After')
      )
    }
    return data
  }
  chunkCombiner = pureJsChunkCombiner
}
