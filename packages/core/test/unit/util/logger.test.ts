import {expect} from 'chai'
import {Logger, setLogger, consoleLogger} from '../../../src/util/logger'

describe('Logger', () => {
  ;[{message: '    hey', error: 'you'}, {message: '    hey'}].forEach(data => {
    it(`uses custom logger's error (${Object.keys(data).length})`, () => {
      let args: Array<any> | undefined
      setLogger({
        error(message, error): void {
          // eslint-disable-next-line prefer-rest-params
          args = Array.from(arguments)
          consoleLogger.error(message, error)
        },
        warn(message, error): void {
          consoleLogger.warn(message, error)
        },
      })
      Logger.error.call(Logger, data.message, data.error)
      expect(args).to.be.deep.equal([data.message, data.error])
    })
    it(`uses custom logger's warn (${Object.keys(data).length})`, () => {
      let args: Array<any> | undefined
      setLogger({
        error(message, error): void {
          consoleLogger.error(message, error)
        },
        warn(message, error): void {
          // eslint-disable-next-line prefer-rest-params
          args = Array.from(arguments)
          consoleLogger.warn(message, error)
        },
      })

      Logger.warn.call(Logger, data.message, data.error)
      expect(args).to.be.deep.equal([data.message, data.error])
    })
  })
})
