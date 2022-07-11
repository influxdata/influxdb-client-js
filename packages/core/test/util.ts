import {setLogger} from '../src/util/logger'

let previous: any

export interface CollectedLogs {
  error: Array<Array<any>>
  warn: Array<Array<any>>
}

export const collectLogging = {
  replace(): CollectedLogs {
    const retVal: CollectedLogs = {
      error: [],
      warn: [],
    }
    previous = setLogger({
      error: function (...args) {
        retVal.error.push(args)
      },
      warn: function (...args) {
        retVal.warn.push(args)
      },
    })
    return retVal
  },
  decorate(): CollectedLogs {
    const retVal: CollectedLogs = {
      error: [],
      warn: [],
    }
    const previous = setLogger({
      error: function (...args) {
        ;(previous.error as any).apply(previous, args)
        retVal.error.push(args)
      },
      warn: function (...args) {
        ;(previous.warn as any).apply(previous, args)
        retVal.warn.push(args)
      },
    })
    return retVal
  },
  after(): void {
    if (previous) {
      setLogger(previous)
      previous = undefined
    }
  },
}
