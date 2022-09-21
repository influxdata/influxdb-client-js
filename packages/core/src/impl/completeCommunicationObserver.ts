import {CommunicationObserver, Headers} from '../results'

type CompleteObserver = Omit<
  Required<CommunicationObserver<any>>,
  'useCancellable' | 'useResume'
> &
  Pick<CommunicationObserver<any>, 'useResume' | 'useCancellable'>

export default function completeCommunicationObserver(
  callbacks: Partial<CommunicationObserver<any>> = {}
): CompleteObserver {
  let state = 0
  const retVal: CompleteObserver = {
    next: (data: any): void | false => {
      if (
        state === 0 &&
        callbacks.next &&
        data !== null &&
        data !== undefined
      ) {
        return callbacks.next(data)
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
    responseStarted: (headers: Headers, statusCode?: number): void => {
      if (callbacks.responseStarted)
        callbacks.responseStarted(headers, statusCode)
    },
  }
  if (callbacks.useCancellable) {
    retVal.useCancellable = callbacks.useCancellable.bind(callbacks)
  }
  if (callbacks.useResume) {
    retVal.useResume = callbacks.useResume.bind(callbacks)
  }
  return retVal
}
