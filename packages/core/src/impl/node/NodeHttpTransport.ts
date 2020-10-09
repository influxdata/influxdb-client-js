import {ConnectionOptions, DEFAULT_ConnectionOptions} from '../../options'
import {parse} from 'url'
import * as http from 'http'
import * as https from 'https'
import {Buffer} from 'buffer'
import {RequestTimedOutError, AbortError, HttpError} from '../../errors'
import {
  CommunicationObserver,
  Transport,
  SendOptions,
  Headers,
  ChunkCombiner,
} from '../../transport'
import Cancellable from '../../util/Cancellable'
import nodeChunkCombiner from './nodeChunkCombiner'
import zlib from 'zlib'
import completeCommunicationObserver from '../completeCommunicationObserver'
import {CLIENT_LIB_VERSION} from '../version'
import Logger from '../Logger'

const zlibOptions = {
  flush: zlib.Z_SYNC_FLUSH,
  finishFlush: zlib.Z_SYNC_FLUSH,
}
const emptyBuffer = Buffer.allocUnsafe(0)

class CancellableImpl implements Cancellable {
  private cancelled = false
  cancel(): void {
    this.cancelled = true
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
  /**
   * Creates a node transport using for the client options supplied.
   * @param connectionOptions - connection options
   */
  constructor(private connectionOptions: ConnectionOptions) {
    const url = parse(connectionOptions.url)
    this.defaultOptions = {
      ...DEFAULT_ConnectionOptions,
      ...connectionOptions,
      ...connectionOptions.transportOptions,
      port: url.port,
      protocol: url.protocol,
      hostname: url.hostname,
    }
    this.contextPath = url.path ?? ''
    if (this.contextPath.endsWith('/')) {
      this.contextPath = this.contextPath.substring(
        0,
        this.contextPath.length - 1
      )
    }
    // https://github.com/influxdata/influxdb-client-js/issues/263
    // don't allow /api/v2 suffix to avoid future problems
    if (this.contextPath == '/api/v2') {
      Logger.warn(
        `Please remove '/api/v2' context path from InfluxDB base url, using ${url.protocol}//${url.hostname}:${url.port} !`
      )
      this.contextPath = ''
    }

    if (url.protocol === 'http:') {
      this.requestApi = http.request
    } else if (url.protocol === 'https:') {
      this.requestApi = https.request
    } else {
      throw new Error(
        `Unsupported protocol "${url.protocol} in URL: "${connectionOptions.url}"`
      )
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
    const message = this.createRequestMessage(path, body, options)
    const cancellable = new CancellableImpl()
    if (callbacks && callbacks.useCancellable)
      callbacks.useCancellable(cancellable)
    this._request(message, cancellable, callbacks)
  }

  /**
   * Sends data to the server and receives decoded result. The type of the result depends on
   * response's content-type (deserialized json, text).
  
   * @param path - HTTP path
   * @param requestBody - request body
   * @param options - send options
   * @returns Promise of response body
   */
  request(path: string, body: any, options: SendOptions): Promise<any> {
    if (!body) {
      body = ''
    } else if (typeof body !== 'string') {
      body = JSON.stringify(body)
    }
    let buffer = emptyBuffer
    let contentType: string
    return new Promise((resolve, reject) => {
      this.send(path, body as string, options, {
        responseStarted(headers: Headers) {
          contentType = String(headers['content-type'])
        },
        next: (data: Uint8Array): void => {
          buffer = Buffer.concat([buffer, data])
        },
        complete: (): void => {
          const responseType = options.headers?.accept ?? contentType
          try {
            if (responseType.includes('json')) {
              resolve(JSON.parse(buffer.toString('utf8')))
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
  ): {[key: string]: any} {
    const bodyBuffer = Buffer.from(body, 'utf-8')
    const headers: {[key: string]: any} = {
      'content-type': 'application/json; charset=utf-8',
      'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`,
    }
    if (this.connectionOptions.token) {
      headers.authorization = 'Token ' + this.connectionOptions.token
    }
    const options: {[key: string]: any} = {
      ...this.defaultOptions,
      path: this.contextPath + path,
      method: sendOptions.method,
      headers: {
        ...headers,
        ...sendOptions.headers,
      },
      body: bodyBuffer,
    }
    options.headers['content-length'] = bodyBuffer.length

    return options
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
      if (cancellable.isCancelled()) {
        res.resume()
        listeners.complete()
        return
      }
      res.on('aborted', () => {
        listeners.error(new AbortError())
      })
      listeners.responseStarted(res.headers, res.statusCode)
      /* istanbul ignore next statusCode is optional in http.IncomingMessage */
      const statusCode = res.statusCode ?? 600
      const contentEncoding = res.headers['content-encoding']
      let responseData
      if (contentEncoding === 'gzip') {
        responseData = zlib.createGunzip(zlibOptions)
        res.pipe(responseData)
      } else {
        responseData = res
      }
      responseData.on('error', listeners.error)
      if (statusCode >= 300) {
        let body = ''
        responseData.on('data', s => {
          body += s.toString()
          if (body.length > 1000) {
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
              res.headers['retry-after']
            )
          )
        })
      } else {
        responseData.on('data', data => {
          if (cancellable.isCancelled()) {
            res.resume()
          } else {
            listeners.next(data)
          }
        })
        responseData.on('end', listeners.complete)
      }
    })
    // Support older Nodes which don't allow .timeout() in the
    // request options
    /* istanbul ignore else support older node versions */
    if (typeof req.setTimeout === 'function') {
      req.setTimeout(requestMessage.timeout)
    }

    req.on('timeout', () => {
      listeners.error(new RequestTimedOutError())
    })
    req.on('error', error => {
      listeners.error(error)
    })
    req.on('close', listeners.complete)

    /* istanbul ignore else support older node versions */
    if (requestMessage.body) {
      req.write(requestMessage.body)
    }
    req.end()
  }
}
export default NodeHttpTransport
