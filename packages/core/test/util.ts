import {expect} from 'chai'
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

let rejections: Array<any> = []
function addRejection(e: any) {
  rejections.push(e)
}

/**
 * Used by unit tests to check that no unhandled promise rejection occurs.
 */
export const unhandledRejections = {
  before(): void {
    rejections = []
    process.on('unhandledRejection', addRejection)
  },
  after(): void {
    process.off('unhandledRejection', addRejection)
    expect(rejections, 'Unhandled Promise rejections detected').deep.equals([])
  },
}
