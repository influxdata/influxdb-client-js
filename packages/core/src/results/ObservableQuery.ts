import {
  Observable,
  Observer,
  ObserverComplete,
  ObserverError,
  ObserverNext,
  Subscription,
  symbolObservable,
} from '../observable'
import {CommunicationObserver} from '../results/CommunicationObserver'
import {Cancellable} from '../results/Cancellable'

/** APIExecutor executes the API and passes its response to the supplied consumer */
export type APIExecutor = (consumer: CommunicationObserver<Uint8Array>) => void

type Decorator<T> = (observer: Observer<T>) => Observer<Uint8Array>

class QuerySubscription implements Subscription {
  private cancellable?: Cancellable
  private isClosed = false

  public constructor(observer: Observer<Uint8Array>, executor: APIExecutor) {
    try {
      executor({
        next: (value) => {
          observer.next(value)
        },
        error: (e) => {
          this.isClosed = true
          observer.error(e)
        },
        complete: () => {
          this.isClosed = true
          observer.complete()
        },
        useCancellable: (c) => {
          this.cancellable = c
        },
      })
    } catch (e) {
      this.isClosed = true
      observer.error(e)
    }
  }

  public get closed(): boolean {
    return this.isClosed
  }

  public unsubscribe(): void {
    this.cancellable?.cancel()
    this.isClosed = true
  }
}

function noop(): void {}

function completeObserver<T>(observer: Partial<Observer<T>>): Observer<T> {
  const {next, error, complete} = observer

  return {
    next: next ? next.bind(observer) : noop,
    error: error ? error.bind(observer) : noop,
    complete: complete ? complete.bind(observer) : noop,
  }
}

export default class ObservableQuery<T> implements Observable<T> {
  public constructor(
    private readonly executor: APIExecutor,
    private readonly decorator: Decorator<T>
  ) {}

  public subscribe(
    observerOrNext?: Partial<Observer<T>> | ObserverNext<T>,
    error?: ObserverError,
    complete?: ObserverComplete
  ): Subscription {
    const observer = completeObserver(
      typeof observerOrNext !== 'object' || observerOrNext === null
        ? {next: observerOrNext, error, complete}
        : observerOrNext
    )

    return new QuerySubscription(this.decorator(observer), this.executor)
  }

  public [symbolObservable](): this {
    return this
  }

  // this makes sure we satisfy the interface, while using a possibly polyfilled
  // [symbolObservable] above for the actual implementation
  public declare [Symbol.observable]: () => this
}
