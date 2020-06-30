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
import Logger from '../Logger'
import {CLIENT_LIB_VERSION} from '../version'

/**
 * Transport layer that use browser fetch.
 */
export default class FetchTransport implements Transport {
  chunkCombiner = pureJsChunkCombiner
  private defaultHeaders: {[key: string]: string}
  constructor(private connectionOptions: ConnectionOptions) {
    this.defaultHeaders = {
      'content-type': 'application/json; charset=utf-8',
      'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`,
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
        if (response.status >= 300) {
          return response
            .text()
            .then((text: string) => {
              observer.error(
                new HttpError(
                  response.status,
                  response.statusText,
                  text,
                  response.headers.get('retry-after')
                )
              )
            })
            .catch((e: Error) => {
              Logger.warn('Unable to receive error body', e)
              observer.error(
                new HttpError(
                  response.status,
                  response.statusText,
                  undefined,
                  response.headers.get('retry-after')
                )
              )
            })
        } else {
          if (response.body) {
            const reader = response.body.getReader()
            let chunk: ReadableStreamReadResult<Uint8Array>
            do {
              chunk = await reader.read()
              observer.next(chunk.value)
            } while (!chunk.done)
          } else if (response.arrayBuffer) {
            const buffer = await response.arrayBuffer()
            observer.next(new Uint8Array(buffer))
          } else {
            const text = await response.text()
            observer.next(new TextEncoder().encode(text))
          }
        }
      })
      .catch(e => observer.error(e))
      .finally(() => observer.complete())
  }
  async request(path: string, body: any, options: SendOptions): Promise<any> {
    const response = await this.fetch(path, body, options)
    const {status, headers} = response
    const responseContentType = headers.get('content-type') || ''

    let data = undefined
    try {
      if (responseContentType.includes('json')) {
        data = await response.json()
      } else if (responseContentType.includes('text')) {
        data = await response.text()
      }
    } catch (_e) {
      // ignore
      Logger.warn('Unable to read error body', _e)
    }
    if (status >= 300) {
      if (!data) {
        const headerError = headers.get('x-influxdb-error')
        if (headerError) {
          data = headerError
        }
      }
      throw new HttpError(
        status,
        response.statusText,
        data,
        response.headers.get('retry-after')
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
      body:
        method === 'GET' || method === 'HEAD'
          ? undefined
          : typeof body === 'string'
          ? body
          : JSON.stringify(body),
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      credentials: 'omit' as 'omit',
      // allow to specify custom options, such as signal, in SendOptions
      ...other,
    })
  }
}
