import {Transport, SendOptions} from '../../transport'
import {ConnectionOptions} from '../../options'
import {AbortError, HttpError} from '../../errors'
import completeCommunicationObserver from '../completeCommunicationObserver'
import {Log} from '../../util/logger'
import {
  ChunkCombiner,
  CommunicationObserver,
  createTextDecoderCombiner,
  Headers,
  ResponseStartedFn,
} from '../../results'

function getResponseHeaders(response: Response): Headers {
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
  return headers
}

/**
 * Transport layer that use browser fetch.
 */
export default class FetchTransport implements Transport {
  chunkCombiner: ChunkCombiner = createTextDecoderCombiner()
  private defaultHeaders: {[key: string]: string}
  private url: string
  constructor(private connectionOptions: ConnectionOptions) {
    this.defaultHeaders = {
      'content-type': 'application/json; charset=utf-8',
      // 'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`, // user-agent can hardly be customized https://github.com/influxdata/influxdb-client-js/issues/262
      ...connectionOptions.headers,
    }
    if (this.connectionOptions.token) {
      this.defaultHeaders['Authorization'] =
        'Token ' + this.connectionOptions.token
    }
    this.url = String(this.connectionOptions.url)
    if (this.url.endsWith('/')) {
      this.url = this.url.substring(0, this.url.length - 1)
    }
    // https://github.com/influxdata/influxdb-client-js/issues/263
    // don't allow /api/v2 suffix to avoid future problems
    if (this.url.endsWith('/api/v2')) {
      this.url = this.url.substring(0, this.url.length - '/api/v2'.length)
      Log.warn(
        `Please remove '/api/v2' context path from InfluxDB base url, using ${this.url} !`
      )
    }
  }
  send(
    path: string,
    body: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<Uint8Array>> | undefined
  ): void {
    const observer = completeCommunicationObserver(callbacks)
    let cancelled = false
    let signal = (options as any).signal
    let pausePromise: Promise<void> | undefined
    const resumeQuickly = () => {}
    let resume = resumeQuickly
    if (callbacks && callbacks.useCancellable) {
      const controller = new AbortController()
      if (!signal) {
        signal = controller.signal
        options = {...options, signal}
      }
      // resume data reading so that it can exit on abort signal
      signal.addEventListener('abort', () => {
        resume()
      })
      callbacks.useCancellable({
        cancel() {
          cancelled = true
          controller.abort()
        },
        isCancelled() {
          return cancelled || signal.aborted
        },
      })
    }
    this.fetch(path, body, options)
      .then(async (response) => {
        if (callbacks?.responseStarted) {
          observer.responseStarted(
            getResponseHeaders(response),
            response.status
          )
        }
        await this.throwOnErrorResponse(response)
        if (response.body) {
          const reader = response.body.getReader()
          let chunk: ReadableStreamReadResult<Uint8Array>
          do {
            if (pausePromise) {
              await pausePromise
            }
            if (cancelled) {
              break
            }
            chunk = await reader.read()
            if (observer.next(chunk.value) === false) {
              const useResume = observer.useResume
              if (!useResume) {
                const msg = 'Unable to pause, useResume is not configured!'
                await reader.cancel(msg)
                return Promise.reject(new Error(msg))
              }
              pausePromise = new Promise((resolve) => {
                resume = () => {
                  resolve()
                  pausePromise = undefined
                  resume = resumeQuickly
                }
                useResume(resume)
              })
            }
          } while (!chunk.done)
        } else if (response.arrayBuffer) {
          const buffer = await response.arrayBuffer()
          observer.next(new Uint8Array(buffer))
        } else {
          const text = await response.text()
          observer.next(new TextEncoder().encode(text))
        }
      })
      .catch((e) => {
        if (!cancelled) {
          observer.error(e)
        }
      })
      .finally(() => observer.complete())
  }
  private async throwOnErrorResponse(response: Response): Promise<void> {
    if (response.status >= 300) {
      let text = ''
      try {
        text = await response.text()
        if (!text) {
          const headerError = response.headers.get('x-influxdb-error')
          if (headerError) {
            text = headerError
          }
        }
      } catch (e) {
        Log.warn('Unable to receive error body', e)

        throw new HttpError(
          response.status,
          response.statusText,
          undefined,
          response.headers.get('retry-after'),
          response.headers.get('content-type'),
          undefined,
          getResponseHeaders(response)
        )
      }
      throw new HttpError(
        response.status,
        response.statusText,
        text,
        response.headers.get('retry-after'),
        response.headers.get('content-type'),
        undefined,
        getResponseHeaders(response)
      )
    }
  }

  async *iterate(
    path: string,
    body: string,
    options: SendOptions
  ): AsyncIterableIterator<Uint8Array> {
    const response = await this.fetch(path, body, options)
    await this.throwOnErrorResponse(response)
    if (response.body) {
      const reader = response.body.getReader()
      for (;;) {
        const {value, done} = await reader.read()
        if (done) {
          break
        }
        if (options.signal?.aborted) {
          await response.body.cancel()
          throw new AbortError()
        }
        yield value
      }
    } else if (response.arrayBuffer) {
      const buffer = await response.arrayBuffer()
      yield new Uint8Array(buffer)
    } else {
      const text = await response.text()
      yield new TextEncoder().encode(text)
    }
  }

  async request(
    path: string,
    body: any,
    options: SendOptions,
    responseStarted?: ResponseStartedFn
  ): Promise<any> {
    const response = await this.fetch(path, body, options)
    const {headers} = response
    const responseContentType = headers.get('content-type') || ''
    if (responseStarted) {
      responseStarted(getResponseHeaders(response), response.status)
    }

    await this.throwOnErrorResponse(response)
    const responseType = options.headers?.accept ?? responseContentType
    if (responseType.includes('json')) {
      return await response.json()
    } else if (
      responseType.includes('text') ||
      responseType.startsWith('application/csv')
    ) {
      return await response.text()
    }
  }

  private fetch(
    path: string,
    body: any,
    options: SendOptions
  ): Promise<Response> {
    const {method, headers, ...other} = options
    const url = `${this.url}${path}`
    const request: RequestInit = {
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
      credentials: 'omit' as const,
      // override with custom transport options
      ...this.connectionOptions.transportOptions,
      // allow to specify custom options, such as signal, in SendOptions
      ...other,
    }
    this.requestDecorator(request, options, url)
    return fetch(url, request)
  }

  /**
   * RequestDecorator allows to modify requests before sending.
   *
   * The following example shows a function that adds gzip
   * compression of requests using pako.js.
   *
   * ```ts
   * const client = new InfluxDB({url: 'http://a'})
   * client.transport.requestDecorator = function(request, options) {
   *   const body = request.body
   *   if (
   *     typeof body === 'string' &&
   *     options.gzipThreshold !== undefined &&
   *     body.length > options.gzipThreshold
   *   ) {
   *     request.headers['content-encoding'] = 'gzip'
   *     request.body = pako.gzip(body)
   *   }
   * }
   * ```
   */
  public requestDecorator: (
    request: RequestInit,
    options: SendOptions,
    url: string
  ) => void = function () {}
}
