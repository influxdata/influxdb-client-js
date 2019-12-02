import {ConnectionOptions} from '../options'
import {parse} from 'url'
import * as http from 'http'
import * as https from 'https'
import {Buffer} from 'buffer'
import {
  RequestTimedOutError,
  ResponseAbortedError,
  canRetryHttpCall,
  HttpError,
} from '../errors'

const DEFAULT_OPTIONS: Partial<ConnectionOptions> = {
  timeout: 10000,
  maxRetries: 3,
  retryJitter: 1000,
}

/** Informs about changes in the communication with the server */
export interface CommunicationCallbacks {
  /**
   * Data chunk received, can be called mupliple times.
   */
  next(data: any): void
  /**
   * An error message was received.
   */
  error(error: Error): void
  /**
   * Response was fully read.
   */
  complete(): void
}

/**
 * Cancellation of asynchronous query.
 */
export interface Cancellable {
  /**
   * Attempt to cancel execution of this query.
   */
  cancel(): void

  /**
   * Is communication canceled.
   */
  isCancelled(): boolean
}
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
export class NodeHttpTransport {
  private defaultOptions: {[key: string]: any}
  private retryJitter: number
  private requestApi: (
    options: http.RequestOptions,
    callback: (res: http.IncomingMessage) => void
  ) => http.ClientRequest

  /**
   * Creates a node transport using for the client options supplied.
   * @param connectionOptions client options
   */
  constructor(
    private connectionOptions: ConnectionOptions | {[key: string]: any}
  ) {
    const url = parse(connectionOptions.url)
    this.defaultOptions = {
      ...DEFAULT_OPTIONS,
      ...connectionOptions,
      port: url.port,
      protocol: url.protocol,
      method: 'POST',
    }
    this.retryJitter =
      this.defaultOptions.retryJitter > 0 ? this.defaultOptions.retryJitter : 0
    if (url.protocol === 'http') {
      this.requestApi = http.request
    } else if (url.protocol === 'https') {
      this.requestApi = https.request
    } else {
      throw new Error('Unsupported URL: ' + connectionOptions.url)
    }
  }

  /**
   * Sends data to server and receive communication events via communication callbacks.
   *
   * @param path HTTP path
   * @param headers HTTP headers
   * @param method HTTP method
   * @param body  message body
   * @param callbacks communication callbacks
   * @return a handle that can cancel the communication
   */
  send(
    path: string,
    headers: {[key: string]: string},
    method = 'POST',
    body = '',
    callbacks?: Partial<CommunicationCallbacks>
  ): Cancellable {
    const message = this.createRequestMessage(path, headers, method, body)
    const cancellable = new CancellableImpl()
    this.request(message, cancellable, callbacks)
    return cancellable
  }

  /**
   * Creates configuration for a specific request that encapluates everything that is
   * required to send data.
   *
   * @param path API path starting with '/' and containing also query parameters
   * @param headers HTTP headers to use in
   * @param method HTTP method
   * @param body request body
   * @return configuration suitable for making the request
   */
  private createRequestMessage(
    path: string,
    headers: {[key: string]: string},
    method: string,
    body: string
  ): {[key: string]: any} {
    const bodyBuffer = body ? Buffer.from(body, 'utf-8') : undefined
    const options: {[key: string]: any} = {
      ...this.defaultOptions,
      path,
      method,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        authorization: 'Token ' + this.connectionOptions.token,
        ...headers,
      },
      body: bodyBuffer,
    }
    if (bodyBuffer) {
      options.headers['content-length'] = bodyBuffer.length
    }

    return options
  }

  private request(
    requestMessage: {[key: string]: any},
    cancellable: CancellableImpl,
    callbacks?: Partial<CommunicationCallbacks>
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
        return
      }
      res.on('aborted', () => {
        listeners.error(new ResponseAbortedError())
      })
      const statusCode = res.statusCode || 600
      if (statusCode >= 300) {
        let body = ''
        res.on('data', s => {
          if (body.length < 2000) body += s.toString()
        })
        res.on('end', () =>
          listeners.error(new HttpError(statusCode, res.statusMessage, body))
        )
      } else {
        res.on('data', listeners.next)
        res.on('end', listeners.complete)
      }
    })
    // Support older Nodes which don't allow .timeout() in the
    // request options
    if (typeof req.setTimeout === 'function') {
      req.setTimeout(requestMessage.timeout)
    }

    req.on('timeout', () => {
      listeners.error(new RequestTimedOutError())
    })
    req.on('error', () => {
      listeners.error(new RequestTimedOutError())
    })
    req.on('close', listeners.complete)

    if (requestMessage.body) {
      req.write(requestMessage.body)
    }
    req.end()
  }

  private createRetriableCallbacks(
    requestMessage: {[key: string]: any},
    cancellable: CancellableImpl,
    callbacks: Partial<CommunicationCallbacks> = {}
  ): CommunicationCallbacks {
    let state = 0
    const retVal = {
      next: (data: any): void => {
        if (state === 0 && callbacks.next) {
          callbacks.next(data)
        }
      },
      error: (error: Error): void => {
        if (state === 0 && canRetryHttpCall(error)) {
          state = 1
          const retries = requestMessage.retries || 0
          if (retries < this.defaultOptions.maxRetries) {
            requestMessage.retries = retries + 1
            const cancelHandle = setTimeout(
              () => this.request(requestMessage, cancellable, callbacks),
              this.getRetryDelay(error)
            )
            cancellable.addCancelableAction(() => clearTimeout(cancelHandle))
            return
          }
        }
        if (callbacks.error) callbacks.error(error)
      },
      complete: (): void => {
        if (state === 0) {
          state = 2
          if (callbacks.complete) callbacks.complete()
        }
      },
    }
    return retVal
  }

  private getRetryDelay(error: Error): number {
    let delay = -1
    if ((error as any).retryAfter) {
      delay = ((error as any).retryAfter as () => number)()
    }
    if (delay < 0) {
      delay = Math.round(Math.random() * this.retryJitter)
    }
    return delay
  }
}
