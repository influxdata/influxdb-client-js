import {ConnectionOptions, DEFAULT_ConnectionOptions} from '../options'
import {parse} from 'url'
import * as http from 'http'
import * as https from 'https'
import {Buffer} from 'buffer'
import {
  RequestTimedOutError,
  ResponseAbortedError,
  canRetryHttpCall,
  HttpError,
  RetryDelayStrategy,
} from '../errors'
import {CommunicationObserver, Transport, SendOptions} from '../transport'
import Cancellable from '../util/Cancellable'
import {RetryStrategyImpl} from './retryStrategy'

class CancellableImpl implements Cancellable {
  private cancelled = false
  timeouts: Array<() => void> = []
  cancel(): void {
    this.cancelled = true
    if (this.timeouts.length > 0) {
      this.timeouts.forEach(x => x())
      this.timeouts = []
    }
  }
  isCancelled(): boolean {
    return this.cancelled
  }

  addCancelableAction(action: () => void): void {
    this.timeouts.push(action)
  }
}

/**
 * Transport layer on top of node http or https library.
 */
export class NodeHttpTransport implements Transport {
  private defaultOptions: {[key: string]: any}
  private requestApi: (
    options: http.RequestOptions,
    callback: (res: http.IncomingMessage) => void
  ) => http.ClientRequest
  retryStrategy: RetryDelayStrategy
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
    const retryJitter =
      this.defaultOptions.retryJitter > 0 ? this.defaultOptions.retryJitter : 0
    this.retryStrategy = new RetryStrategyImpl({retryJitter})
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
   * Sends data to server and receive communication events via communication callbacks.
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
    this.request(message, cancellable, callbacks)
  }

  /**
   * Creates configuration for a specific request that encapluates everything that is
   * required to send data.
   *
   * @param path API path starting with '/' and containing also query parameters
   * @param headers HTTP headers to use in
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
    if (sendOptions.maxRetries !== undefined)
      options.maxRetries = sendOptions.maxRetries
    options.headers['content-length'] = bodyBuffer.length

    return options
  }

  private request(
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
      const statusCode =
        res.statusCode || /* istanbul ignore next safety check */ 600
      if (statusCode >= 300) {
        let body = ''
        res.on('data', s => {
          body += s.toString()
          if (body.length > 1000) {
            body = body.slice(0, 1000)
            res.resume()
          }
        })
        res.on('end', () =>
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
        res.on('data', data => {
          if (cancellable.isCancelled()) {
            res.resume()
          } else {
            listeners.next(data)
          }
        })
        res.on('end', listeners.complete)
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
  ): CommunicationObserver<any> {
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
          if (canRetryHttpCall(error)) {
            const retries = requestMessage.retries || 0
            if (retries < requestMessage.maxRetries) {
              requestMessage.retries = retries + 1
              const cancelHandle = setTimeout(
                () => this.request(requestMessage, cancellable, callbacks),
                this.retryStrategy.nextDelay(error)
              )
              cancellable.addCancelableAction(() => {
                /* istanbul ignore next safety check */
                if (callbacks.complete) callbacks.complete()
                clearTimeout(cancelHandle)
              })
              return
            }
          }
          /* istanbul ignore else safety check */
          if (callbacks.error) callbacks.error(error)
        }
      },
      complete: (): void => {
        if (state === 0) {
          this.retryStrategy.success()
          state = 2
          /* istanbul ignore else safety check */
          if (callbacks.complete) callbacks.complete()
        }
      },
    }
    return retVal
  }
}
export default NodeHttpTransport
