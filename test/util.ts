import {setLogger} from '../src/client/impl/Logger'

let previous: any

export interface CollectedLogs {
  error: Array<Array<any>>
  warn: Array<Array<any>>
}

export const collectLogging = {
  before(): CollectedLogs {
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
  after() {
    if (previous) {
      setLogger(previous)
      previous = undefined
    }
  },
}
