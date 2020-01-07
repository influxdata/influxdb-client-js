/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Transport,
  SendOptions,
  CommunicationObserver,
  Headers,
} from '../../transport'
import pureJsChunkCombiner from '../pureJsChunkCombiner'
import {ConnectionOptions} from '../../options'
import {HttpError} from '../../errors'
import completeCommunicationObserver from '../completeCommunicationObserver'

function normalizeUrl(s: string): string {
  const match = s.match(/^(https?:\/\/[^:/?#]*(?::[0-9]+)?).*$/i)
  if (!match) throw new Error(`Unsupported url: ${s}`)
  return match[1]
}
/**
 * Transport layer that use browser fetch.
 */
export default class FetchTransport implements Transport {
  chunkCombiner = pureJsChunkCombiner
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
    body: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<Uint8Array>> | undefined
  ): void {
    const observer = completeCommunicationObserver(callbacks)
    if (callbacks && callbacks.useCancellable && !(options as any).signal) {
      const controller = new AbortController()
      const signal = controller.signal
      callbacks.useCancellable({
        cancel() {
          controller.abort()
        },
        isCancelled() {
          return signal.aborted
        },
      })
    }
    this.fetch(path, body, options)
      .then(async response => {
        if (callbacks?.responseStarted) {
          const headers: Headers = {}
          response.headers.forEach((value: string, key: string) => {
            const previous = headers[key]
            if (previous === undefined) {
              headers[key] = value
            } else if (Array.isArray(previous)) {
              previous.push(value)
            } else {
              headers[key] = [previous, value]
            }
          })
          observer.responseStarted(headers)
        }
        if (response.body) {
          const reader = response.body.getReader()
          let chunk: ReadableStreamReadResult<Uint8Array>
          do {
            chunk = await reader.read()
            observer.next(chunk)
          } while (!chunk.done)
        } else if (response.arrayBuffer) {
          const buffer = await response.arrayBuffer()
          observer.next(new Uint8Array(buffer))
        } else {
          const text = await response.text()
          observer.next(new TextEncoder().encode(text))
        }
        response.body?.getReader
      })
      .catch(e => observer.error(e))
      .finally(() => observer.complete())
  }
  async request(path: string, body: any, options: SendOptions): Promise<any> {
    const response = await this.fetch(path, body, options)
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

  private fetch(
    path: string,
    body: any,
    options: SendOptions
  ): Promise<Response> {
    const {method, headers, ...other} = options
    return fetch(`${this.connectionOptions.url}${path}`, {
      method: method,
      body: typeof body === 'string' ? body : JSON.stringify(body),
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      credentials: 'include' as 'include',
      // allow to specify custom options, such as signal, in SendOptions
      ...other,
    })
  }
}
