import {ConnectionOptions, DEFAULT_ConnectionOptions} from '../../options'
import {parse} from 'url'
import * as http from 'http'
import * as https from 'https'
import {Buffer} from 'buffer'
import {RequestTimedOutError, AbortError, HttpError} from '../../errors'
import {Transport, SendOptions} from '../../transport'
import {
  Cancellable,
  ChunkCombiner,
  CommunicationObserver,
  Headers,
  ResponseStartedFn,
} from '../../results'
import nodeChunkCombiner from './nodeChunkCombiner'
import zlib from 'zlib'
import completeCommunicationObserver from '../completeCommunicationObserver'
import {CLIENT_LIB_VERSION} from '../version'
import {Log} from '../../util/logger'

const zlibOptions = {
  flush: zlib.constants.Z_SYNC_FLUSH,
  finishFlush: zlib.constants.Z_SYNC_FLUSH,
}
const emptyBuffer = Buffer.allocUnsafe(0)

class CancellableImpl implements Cancellable {
  private cancelled = false
  public resume?: () => void
  cancel(): void {
    this.cancelled = true
    if (this.resume) {
      this.resume()
      this.resume = undefined
    }
  }
  isCancelled(): boolean {
    return this.cancelled
  }
}

/**
 * Transport layer on top of node http or https library.
 */
export class NodeHttpTransport implements Transport {
  /* required transport member */
  readonly chunkCombiner: ChunkCombiner = nodeChunkCombiner

  private defaultOptions: {[key: string]: any}
  private requestApi: (
    options: http.RequestOptions,
    callback: (res: http.IncomingMessage) => void
  ) => http.ClientRequest
  private contextPath: string
  private token?: string
  private headers: Record<string, string>
  /**
   * Creates a node transport using for the client options supplied.
   * @param connectionOptions - connection options
   */
  constructor(connectionOptions: ConnectionOptions) {
    const {
      url: _url,
      proxyUrl,
      token,
      transportOptions,
      ...nodeSupportedOptions
    } = connectionOptions
    const url = parse(proxyUrl || _url)
    this.token = token
    this.defaultOptions = {
      ...DEFAULT_ConnectionOptions,
      ...nodeSupportedOptions,
      ...transportOptions,
      port: url.port,
      protocol: url.protocol,
      hostname: url.hostname,
    }
    this.contextPath = proxyUrl ? _url : url.path ?? ''
    if (this.contextPath.endsWith('/')) {
      this.contextPath = this.contextPath.substring(
        0,
        this.contextPath.length - 1
      )
    }
    // remove all undefined field to avoid node validation errors
    // https://github.com/influxdata/influxdb-client-js/issues/380
    Object.keys(this.defaultOptions).forEach(
      (key) =>
        this.defaultOptions[key] === undefined &&
        delete this.defaultOptions[key]
    )
    // https://github.com/influxdata/influxdb-client-js/issues/263
    // don't allow /api/v2 suffix to avoid future problems
    if (this.contextPath.endsWith('/api/v2')) {
      Log.warn(
        `Please remove '/api/v2' context path from InfluxDB base url, using ${url.protocol}//${url.hostname}:${url.port} !`
      )
      this.contextPath = ''
    }

    if (url.protocol === 'http:') {
      this.requestApi =
        this.defaultOptions['follow-redirects']?.http?.request ?? http.request
    } else if (url.protocol === 'https:') {
      this.requestApi =
        this.defaultOptions['follow-redirects']?.https?.request ?? https.request
    } else {
      throw new Error(
        `Unsupported protocol "${url.protocol} in URL: "${connectionOptions.url}"`
      )
    }
    this.headers = {
      'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`,
      ...connectionOptions.headers,
    }
    if (proxyUrl) {
      this.headers['Host'] = parse(_url).host as string
    }
  }

  /**
   * Sends data to server and receives communication events via communication callbacks.
   *
   * @param path - HTTP request  path
   * @param body - message body
   * @param headers - HTTP headers
   * @param method - HTTP method
   * @param callbacks - communication callbacks
   */
  send(
    path: string,
    body: string,
    options: SendOptions,
    callbacks?: Partial<CommunicationObserver<any>>
  ): void {
    const cancellable = new CancellableImpl()
    if (callbacks && callbacks.useCancellable)
      callbacks.useCancellable(cancellable)
    this.createRequestMessage(path, body, options).then(
      (message: {[key: string]: any}) => {
        this._request(message, cancellable, callbacks)
      },
      /* istanbul ignore next - hard to simulate failure, manually reviewed */
      (err: Error) => callbacks?.error && callbacks.error(err)
    )
  }

  /**
   * Sends data to the server and receives decoded result. The type of the result depends on
   * response's content-type (deserialized json, text).
  
   * @param path - HTTP path
   * @param requestBody - request body
   * @param options - send options
   * @returns Promise of response body
   */
  request(
    path: string,
    body: any,
    options: SendOptions,
    responseStarted?: ResponseStartedFn
  ): Promise<any> {
    if (!body) {
      body = ''
    } else if (typeof body !== 'string') {
      body = JSON.stringify(body)
    }
    let buffer = emptyBuffer
    let contentType: string
    let responseStatusCode: number | undefined
    return new Promise((resolve, reject) => {
      this.send(path, body as string, options, {
        responseStarted(headers: Headers, statusCode?: number) {
          if (responseStarted) {
            responseStarted(headers, statusCode)
          }
          contentType = String(headers['content-type'])
          responseStatusCode = statusCode
        },
        next: (data: Uint8Array): void => {
          buffer = Buffer.concat([buffer, data])
        },
        complete: (): void => {
          const responseType = options.headers?.accept ?? contentType
          try {
            if (responseStatusCode === 204) {
              // ignore body of NO_CONTENT response
              resolve(undefined)
            }
            if (responseType.includes('json')) {
              if (buffer.length) {
                resolve(JSON.parse(buffer.toString('utf8')))
              } else {
                resolve(undefined)
              }
            } else if (
              responseType.includes('text') ||
              responseType.startsWith('application/csv')
            ) {
              resolve(buffer.toString('utf8'))
            } else {
              resolve(buffer)
            }
          } catch (e) {
            reject(e)
          }
        },
        error: (e: Error): void => {
          reject(e)
        },
      })
    })
  }

  /**
   * Creates configuration for a specific request.
   *
   * @param path - API path starting with '/' and containing also query parameters
   * @param headers - HTTP headers to use
   * @param method - HTTP method
   * @param body - request body, will be utf-8 encoded
   * @returns a configuration object that is suitable for making the request
   */
  private createRequestMessage(
    path: string,
    body: string,
    sendOptions: SendOptions
  ): Promise<{[key: string]: any}> {
    const bodyBuffer = Buffer.from(body, 'utf-8')
    const headers: {[key: string]: any} = {
      'content-type': 'application/json; charset=utf-8',
      ...this.headers,
    }
    if (this.token) {
      headers.authorization = 'Token ' + this.token
    }
    let bodyPromise = Promise.resolve(bodyBuffer)
    const options: {[key: string]: any} = {
      ...this.defaultOptions,
      path: this.contextPath + path,
      method: sendOptions.method,
      headers: {
        ...headers,
        ...sendOptions.headers,
      },
    }
    if (
      sendOptions.gzipThreshold !== undefined &&
      sendOptions.gzipThreshold < bodyBuffer.length
    ) {
      bodyPromise = bodyPromise.then((body) => {
        return new Promise((resolve, reject) => {
          zlib.gzip(body, (err, res) => {
            /* istanbul ignore next - hard to simulate failure, manually reviewed */
            if (err) {
              return reject(err)
            }
            options.headers['content-encoding'] = 'gzip'
            return resolve(res)
          })
        })
      })
    }

    return bodyPromise.then((bodyBuffer) => {
      options.body = bodyBuffer
      options.headers['content-length'] = bodyBuffer.length
      return options
    })
  }

  private _request(
    requestMessage: {[key: string]: any},
    cancellable: CancellableImpl,
    callbacks?: Partial<CommunicationObserver<any>>
  ): void {
    const listeners = completeCommunicationObserver(callbacks)
    if (cancellable.isCancelled()) {
      listeners.complete()
      return
    }
    const req = this.requestApi(requestMessage, (res: http.IncomingMessage) => {
      /* istanbul ignore next - hard to simulate failure, manually reviewed */
      if (cancellable.isCancelled()) {
        res.resume()
        listeners.complete()
        return
      }
      res.on('aborted', () => {
        listeners.error(new AbortError())
      })
      res.on('error', listeners.error)
      listeners.responseStarted(res.headers, res.statusCode)
      /* istanbul ignore next statusCode is optional in http.IncomingMessage */
      const statusCode = res.statusCode ?? 600
      const contentEncoding = res.headers['content-encoding']
      let responseData
      if (contentEncoding === 'gzip') {
        responseData = zlib.createGunzip(zlibOptions)
        responseData.on('error', listeners.error)
        res.pipe(responseData)
      } else {
        responseData = res
      }
      if (statusCode >= 300) {
        let body = ''
        const isJson = String(res.headers['content-type']).startsWith(
          'application/json'
        )
        responseData.on('data', (s) => {
          body += s.toString()
          if (!isJson && body.length > 1000) {
            body = body.slice(0, 1000)
            res.resume()
          }
        })
        responseData.on('end', () => {
          if (body === '' && !!res.headers['x-influxdb-error']) {
            body = res.headers['x-influxdb-error'].toString()
          }
          listeners.error(
            new HttpError(
              statusCode,
              res.statusMessage,
              body,
              res.headers['retry-after'],
              res.headers['content-type']
            )
          )
        })
      } else {
        responseData.on('data', (data) => {
          if (cancellable.isCancelled()) {
            res.resume()
          } else {
            if (listeners.next(data) === false) {
              // pause processing, the consumer signalizes that
              // it is not able to receive more data
              if (!listeners.useResume) {
                listeners.error(
                  new Error('Unable to pause, useResume is not configured!')
                )
                res.resume()
                return
              }
              res.pause()
              const resume = () => {
                res.resume()
              }
              cancellable.resume = resume
              listeners.useResume(resume)
            }
          }
        })
        responseData.on('end', listeners.complete)
      }
    })
    // Support older Nodes which don't allow `timeout` in the
    // request options
    /* istanbul ignore else support older node versions */
    if (typeof req.setTimeout === 'function' && requestMessage.timeout) {
      req.setTimeout(requestMessage.timeout)
    }

    req.on('timeout', () => {
      listeners.error(new RequestTimedOutError())
    })
    req.on('error', (error) => {
      listeners.error(error)
    })

    /* istanbul ignore else support older node versions */
    if (requestMessage.body) {
      req.write(requestMessage.body)
    }
    req.end()
  }
}
export default NodeHttpTransport
