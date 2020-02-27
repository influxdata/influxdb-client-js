import {expect} from 'chai'
import RetryBuffer from '../../../src/impl/RetryBuffer'
import {CollectedLogs, collectLogging} from '../../util'

describe('RetryBuffer', () => {
  let logs: CollectedLogs
  beforeEach(() => {
    logs = collectLogging.decorate()
    // logs = collectLogging.replace()
  })
  afterEach(async () => {
    collectLogging.after()
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
      subject.addLines(['a' + i], i, 2)
    }
    await new Promise<void>((resolve, _reject) =>
      setTimeout(() => resolve(), 10)
    )
    expect(output).length.is.greaterThan(0)
    subject.addLines([], 1, 1) // shall be ignored
    subject.close()
    subject.addLines(['x'], 1, 1) // shall be ignored
    await subject.flush()
    expect(input).deep.equals(output)
  })
  it('ignores lines on heavy load', async () => {
    const input = [] as Array<[string[], number]>
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(5, (lines, countdown) => {
      output.push([lines, countdown])
      return Promise.resolve()
    })
    for (let i = 0; i < 10; i++) {
      if (i >= 5) input.push([['a' + i], i])
      subject.addLines(['a' + i], i, 100)
    }
    await new Promise<void>((resolve, _reject) =>
      setTimeout(() => resolve(), 10)
    )
    await subject.flush()
    expect(subject.close()).equals(0)
    expect(logs.error).length.is.greaterThan(0) // 5 entries over limit
    expect(output).length.is.lessThan(6) // at most 5 items will be written
  })
  it('retries does not fail after flush', async () => {
    const output = [] as Array<[string[], number]>
    const subject = new RetryBuffer(5, (lines, countdown) => {
      output.push([lines, countdown])
      return Promise.resolve()
    })
    subject.addLines(['a'], 1, 20)
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
      subject.addLines(['a' + i], i, 2)
    }
    await new Promise<void>((resolve, _reject) =>
      setTimeout(() => resolve(), 10)
    )
    expect(output).length.is.greaterThan(0)
    subject.addLines([], 1, 1) // shall be ignored
    subject.close()
    subject.addLines(['x'], 1, 1) // shall be ignored
    succeed = true
    await subject.flush()
    expect(input).deep.equals(output)
  })
})
