import {expect} from 'chai'
import RetryBuffer from '../../../src/impl/RetryBuffer'

describe('RetryBuffer', () => {
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
  it('ignores lines on heave load', async () => {
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
    subject.close()
    expect(input).deep.equals(output)
  })
  it('retries after flush', async () => {
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
