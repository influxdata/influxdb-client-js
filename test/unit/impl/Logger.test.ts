import {expect} from 'chai'
import Logger, {setLogger, consoleLogger} from '../../../src/impl/Logger'

describe('logger', () => {
  const testSet = {message: '    hey', error: 'you'}
  it("uses custom logger's error", () => {
    let args: Array<any> | undefined
    setLogger({
      error(message, error): void {
        args = Array.from(arguments)
        consoleLogger.error(message, error)
      },
      warn(message, error): void {
        consoleLogger.warn(message, error)
      },
    })
    Logger.error.call(Logger, testSet.message, testSet.error)
    expect(args).to.be.deep.equal([testSet.message, testSet.error])
  })
  it("uses custom logger's warn", () => {
    let args: Array<any> | undefined
    setLogger({
      error(message, error): void {
        consoleLogger.error(message, error)
      },
      warn(message, error): void {
        args = Array.from(arguments)
        consoleLogger.warn(message, error)
      },
    })

    Logger.warn.call(Logger, testSet.message, testSet.error)
    expect(args).to.be.deep.equal([testSet.message, testSet.error])
  })
})
