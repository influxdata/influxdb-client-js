export type ObserverNext<T> = (value: T) => void
export type ObserverError = (e: any) => void
export type ObserverComplete = () => void

export interface Observer<T> {
  next: ObserverNext<T>
  error: ObserverError
  complete: ObserverComplete
}

/**
 * An observable that aligns with the
 * [TC39 observable proposal](https://github.com/tc39/proposal-observable) and
 * can be consumed by other observable libraries like
 * [rxjs](https://github.com/ReactiveX/rxjs) or
 * [zen-observable](https://github.com/zenparsing/zen-observable).
 */
export interface Observable<T> {
  subscribe(): Subscription
  subscribe(observer: Partial<Observer<T>>): Subscription
  subscribe(
    next: ObserverNext<T>,
    error?: ObserverError,
    complete?: ObserverComplete
  ): Subscription
  // this is actually implemented, but we cant add it the interface, because we
  // use `./symbol#symbolObservable` as the key, in case Symbol isnt available
  /* [Symbol.observable](): Observable<T> */
}

export interface Subscription {
  readonly closed: boolean
  unsubscribe(): void
}
