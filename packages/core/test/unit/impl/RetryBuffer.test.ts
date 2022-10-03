import {expect} from 'chai'
import RetryBuffer from '../../../src/impl/RetryBuffer'
import {CollectedLogs, collectLogging, unhandledRejections} from '../../util'
import {waitForCondition} from '../util/waitForCondition'

describe('RetryBuffer', () => {
  let logs: CollectedLogs
  beforeEach(() => {
    logs = collectLogging.decorate()
    // logs = collectLogging.replace()
    unhandledRejections.before()
  })
  afterEach(async () => {
    collectLogging.after()
    unhandledRejections.after()
  })
  it('stores lines for future retry', async () => {
    const input = [] as Array<[string[], number]>
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(100, (lines, countdown) => {
      output.push([lines, countdown])
      return Promise.resolve()
    })
    for (let i = 0; i < 10; i++) {
      input.push([['a' + i], i])
      subject.addLines(['a' + i], i, 2, Date.now() + 1000)
    }
    await waitForCondition(() => output.length >= 10)
    expect(output).length.is.greaterThan(0)
    subject.addLines([], 1, 1, Date.now() + 1000) // empty lines are ignored
    subject.close()
    subject.addLines(['x'], 1, 1, Date.now() + 1000) // ignored after calling flush
    await subject.flush()
    expect(input).deep.equals(output)
  })
  it('ignores lines on heavy load', async () => {
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(
      5,
      (lines, countdown) => {
        output.push([lines, countdown])
        return Promise.resolve()
      },
      ({expires}) => {
        for (let actual = subject.first; actual; actual = actual?.next) {
          if (actual.expires < expires) {
            expect.fail(
              `${actual.expires} entry was not removed from the retry buffer, but ${expires} was!`
            )
          }
        }
      }
    )
    for (let i = 0; i < 10; i++) {
      subject.addLines(['a' + i], i, 100 + i, Date.now() + 1000 + i)
    }
    await subject.flush()
    expect(subject.close()).equals(0)
    expect(logs.error).length.is.greaterThan(0) // 5 entries over limit
    expect(output).length.is.lessThan(6) // at most 5 items will be written
  })
  it('ignores lines on heavy load with descending expiration', async () => {
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(
      5,
      (lines, countdown) => {
        output.push([lines, countdown])
        return Promise.resolve()
      },
      ({expires}) => {
        for (let actual = subject.first; actual; actual = actual?.next) {
          if (actual.expires < expires) {
            expect.fail(
              `${actual.expires} entry was not removed from the retry buffer, but ${expires} was!`
            )
          }
        }
      }
    )
    for (let i = 0; i < 10; i++) {
      subject.addLines(['a' + i], i, 100 + i, Date.now() + 1000 - i)
    }
    await subject.flush()
    expect(subject.close()).equals(0)
    expect(logs.error).length.is.greaterThan(0) // 5 entries over limit
    expect(output).length.is.lessThan(6) // at most 5 items will be written
  })
  it('ignores previous lines on big chunks', async () => {
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(2, (lines, countdown) => {
      output.push([lines, countdown])
      return Promise.resolve()
    })
    subject.addLines(['1', '2', '3'], 1, 100, Date.now() + 1000)
    subject.addLines(['4', '5', '6'], 1, 100, Date.now() + 1000)
    await subject.flush()
    expect(logs.error).length.is.greaterThan(0) // 3 entries over limit
    expect(output).deep.equals([[['4', '5', '6'], 1]]) // at most 5 items will be written
  })
  it('retries does not fail after flush', async () => {
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(5, (lines, countdown) => {
      output.push([lines, countdown])
      return Promise.resolve()
    })
    subject.addLines(['a'], 1, 20, Date.now() + 1000)
    await subject.flush()
    await new Promise<void>(
      (resolve, _reject) => setTimeout(() => resolve(), 21) // let scheduled retry finish
    )
    subject.close()
    expect([[['a'], 1]]).deep.equals(output)
  })
  it('retries also on error', async () => {
    const input = [] as Array<[string[], number]>
    const output = [] as Array<[string[], number]>
    let succeed = false
    const subject = new RetryBuffer(100, (lines, countdown) => {
      output.push([lines, countdown])
      return succeed ? Promise.resolve() : Promise.reject(new Error())
    })
    for (let i = 0; i < 10; i++) {
      input.push([['a' + i], i])
      subject.addLines(['a' + i], i, 2, Date.now() + 1000)
    }
    await new Promise<void>((resolve, _reject) =>
      setTimeout(() => resolve(), 10)
    )
    expect(output).length.is.greaterThan(0)
    subject.addLines([], 1, 1, Date.now() + 1000) // shall be ignored
    subject.close()
    subject.addLines(['x'], 1, 1, Date.now() + 1000) // shall be ignored
    succeed = true
    await subject.flush()
    expect(input).deep.equals(output)
  })
})
