/* Observable interop typing. Taken from https://github.com/ReactiveX/rxjs */

/* Note: This will add Symbol.observable globally for all TypeScript users */
declare global {
  interface SymbolConstructor {
    readonly observable: symbol
  }
}

/** Symbol.observable or a string "@@observable". Used for interop */
export const symbolObservable = (():
  | typeof Symbol.observable
  | '@@observable' =>
  (typeof Symbol === 'function' && Symbol.observable) || '@@observable')()
