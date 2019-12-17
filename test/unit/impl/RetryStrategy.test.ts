import {expect} from 'chai'
import {RetryStrategyImpl} from '../../../src/impl/RetryStrategy'
import {HttpError} from '../../../src'

describe('RetryStrategyImpl', () => {
  it('generates exponential data from min to max for unknown delays', () => {
    const subject = new RetryStrategyImpl({
      minDelay: 100,
      maxDelay: 1000,
      retryJitter: 0,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, _val) => {
      acc.push(subject.nextDelay())
      return acc
    }, [] as number[])
    expect(values).to.be.deep.equal([100, 200, 400, 800, 1000, 1000])
    subject.success()
    expect(subject.nextDelay()).equals(100)
  })
  it('generates the delays according to errors', () => {
    const subject = new RetryStrategyImpl({
      minDelay: 100,
      maxDelay: 1000,
      retryJitter: 0,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, val) => {
      acc.push(subject.nextDelay(new HttpError(503, '', '', String(val))))
      return acc
    }, [] as number[])
    expect(values).to.be.deep.equal([1, 2, 3, 4, 5, 6])
  })
  it('generates jittered delays according to error delay', () => {
    const subject = new RetryStrategyImpl({
      minDelay: 100,
      maxDelay: 1000,
      retryJitter: 10,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, val) => {
      acc.push(subject.nextDelay(new HttpError(503, '', '', String(val))))
      return acc
    }, [] as number[])
    expect(values).to.have.length(6)
    values.forEach((x, i) => {
      expect(x).to.not.be.lessThan(i + 1)
      expect(x).to.not.be.greaterThan(1000)
    })
  })
  it('generates default jittered delays', () => {
    const subject = new RetryStrategyImpl({
      minDelay: 100,
      maxDelay: 1000,
      retryJitter: 10,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, val) => {
      acc.push(subject.nextDelay())
      return acc
    }, [] as number[])
    expect(values).to.have.length(6)
    values.forEach((x, i) => {
      expect(x).to.not.be.lessThan(i)
      expect(x).to.not.be.greaterThan(1000)
      if (i > 0) {
        expect(x).to.not.be.lessThan(values[i - 1])
      }
    })
  })
})
