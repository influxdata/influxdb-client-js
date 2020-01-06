import {ConnectionOptions, DEFAULT_ConnectionOptions} from '../../options'
import {parse} from 'url'
import * as http from 'http'
import * as https from 'https'
import {Buffer} from 'buffer'
import {
  RequestTimedOutError,
  ResponseAbortedError,
  HttpError,
} from '../../errors'
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
  /**
   * Creates a node transport using for the client options supplied.
   * @param connectionOptions client options
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
   * @param path HTTP path
   * @param body  message body
   * @param headers HTTP headers
   * @param method HTTP method
   * @param callbacks communication callbacks
   * @return a handle that can cancel the communication
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
  
   * @param path HTTP path
   * @param requestBody  request body
   * @param options  send options
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
          try {
            if (contentType.includes('json')) {
              resolve(JSON.parse(buffer.toString('utf8')))
            } else if (contentType.includes('text')) {
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
   * @param path API path starting with '/' and containing also query parameters
   * @param headers HTTP headers to use
   * @param method HTTP method
   * @param body request body, will be utf-8 encoded
   * @return configuration suitable for making the request
   */
  private createRequestMessage(
    path: string,
    body: string,
    sendOptions: SendOptions
  ): {[key: string]: any} {
    const bodyBuffer = Buffer.from(body, 'utf-8')
    const options: {[key: string]: any} = {
      ...this.defaultOptions,
      path,
      method: sendOptions.method,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        ...sendOptions.headers,
      },
      body: bodyBuffer,
    }
    if (this.connectionOptions.token) {
      options.headers.authorization = 'Token ' + this.connectionOptions.token
    }
    options.headers['content-length'] = bodyBuffer.length

    return options
  }

  private _request(
    requestMessage: {[key: string]: any},
    cancellable: CancellableImpl,
    callbacks?: Partial<CommunicationObserver<any>>
  ): void {
    const listeners = this.createRetriableCallbacks(
      requestMessage,
      cancellable,
      callbacks
    )
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
        listeners.error(new ResponseAbortedError())
      })
      listeners.responseStarted(res.headers)
      const statusCode =
        res.statusCode || /* istanbul ignore next safety check */ 600
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
        responseData.on('end', () =>
          listeners.error(
            new HttpError(
              statusCode,
              res.statusMessage,
              body,
              res.headers['retry-after']
            )
          )
        )
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

  private createRetriableCallbacks(
    requestMessage: {[key: string]: any},
    cancellable: CancellableImpl,
    callbacks: Partial<CommunicationObserver<any>> = {}
  ): Omit<Required<CommunicationObserver<any>>, 'useCancellable'> {
    let state = 0
    const retVal = {
      next: (data: any): void => {
        if (state === 0 && callbacks.next) {
          callbacks.next(data)
        }
      },
      error: (error: Error): void => {
        /* istanbul ignore else propagate error at most once */
        if (state === 0) {
          state = 1
          /* istanbul ignore else safety check */
          if (callbacks.error) callbacks.error(error)
        }
      },
      complete: (): void => {
        if (state === 0) {
          state = 2
          /* istanbul ignore else safety check */
          if (callbacks.complete) callbacks.complete()
        }
      },
      responseStarted: (headers: Headers): void => {
        if (callbacks.responseStarted) callbacks.responseStarted(headers)
      },
    }
    return retVal
  }
}
export default NodeHttpTransport
