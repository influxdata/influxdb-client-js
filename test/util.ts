import {setLogger} from '../src/client/impl/Logger'

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
      error: function() {
        retVal.error.push(Array.from(arguments))
      },
      warn: function() {
        retVal.warn.push(Array.from(arguments))
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
      error: function() {
        ;(previous.error as any).apply(previous, Array.from(arguments))
        retVal.error.push(Array.from(arguments))
      },
      warn: function() {
        ;(previous.warn as any).apply(previous, Array.from(arguments))
        retVal.warn.push(Array.from(arguments))
      },
    })
    return retVal
  },
  after() {
    if (previous) {
      setLogger(previous)
      previous = undefined
    }
  },
}
