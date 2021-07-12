/** Type of {@link Observer.next} */
export type ObserverNext<T> = (value: T) => void
/** Type of {@link Observer.error} */
export type ObserverError = (e: any) => void
/** Type of {@link Observer.complete} */
export type ObserverComplete = () => void

/** Observer mimics Observer from ECMAScript TC39 Observable proposal */
export interface Observer<T> {
  next: ObserverNext<T>
  error: ObserverError
  complete: ObserverComplete
}

export interface Subscribable<T> {
  subscribe(observer: Partial<Observer<T>>): Subscription
}

/**
 * An observable that aligns with the
 * {@link https://github.com/tc39/proposal-observable | TC39 observable proposal} and
 * can be consumed by other observable libraries like
 * {@link https://github.com/ReactiveX/rxjs | rx js} or
 * {@link https://github.com/zenparsing/zen-observable | zen-observable}.
 */
export interface Observable<T> {
  subscribe(): Subscription
  subscribe(observer: Partial<Observer<T>>): Subscription
  subscribe(
    next: ObserverNext<T>,
    error?: ObserverError,
    complete?: ObserverComplete
  ): Subscription
  [Symbol.observable](): Subscribable<T>
}

/** Subscription mimics Subscription from ECMAScript TC39 Observable proposal */
export interface Subscription {
  readonly closed: boolean
  unsubscribe(): void
}
