import {expect} from 'chai'
import {
  RetryStrategyImpl,
  createRetryDelayStrategy,
} from '../../../src/impl/retryStrategy'
import {HttpError, DEFAULT_RetryDelayStrategyOptions} from '../../../src'

describe('RetryStrategyImpl', () => {
  it('has constructor that uses defaults on no options', () => {
    expect(() => new RetryStrategyImpl()).to.not.throw()
    expect(() => new RetryStrategyImpl({})).to.not.throw()
    expect(() => createRetryDelayStrategy()).to.not.throw()
    expect(new RetryStrategyImpl())
      .property('options')
      .is.deep.equal(DEFAULT_RetryDelayStrategyOptions)
    expect(new RetryStrategyImpl({}))
      .property('options')
      .is.deep.equal(DEFAULT_RetryDelayStrategyOptions)
  })
  it('generates the delays according to errors', () => {
    const subject = new RetryStrategyImpl({
      minRetryDelay: 100,
      maxRetryDelay: 1000,
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
      minRetryDelay: 100,
      maxRetryDelay: 1000,
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
      minRetryDelay: 100,
      maxRetryDelay: 1000,
      retryJitter: 10,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, _val) => {
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
  it('generates exponential data from min to max from state data', () => {
    const subject = new RetryStrategyImpl({
      minRetryDelay: 100,
      maxRetryDelay: 1000,
      retryJitter: 0,
      exponentialBase: 2,
    })
    const values = [1, 2, 3, 4, 5, 6].reduce((acc, _val) => {
      acc.push(subject.nextDelay())
      return acc
    }, [] as number[])
    expect(values).to.be.deep.equal([100, 200, 400, 800, 1000, 1000])
    subject.success()
    expect(subject.nextDelay()).equals(100)
  })
  describe('deterministic interval', () => {
    it('generates exponential data from min to max', () => {
      const subject = new RetryStrategyImpl({
        minRetryDelay: 100,
        maxRetryDelay: 2000,
        retryJitter: 20,
        exponentialBase: 5,
        randomRetry: false,
      })
      const values = [1, 2, 3, 4, 5, 6].reduce((acc, _val, index) => {
        acc.push(subject.nextDelay(undefined, index + 1))
        return acc
      }, [] as number[])
      // truncate values to ignore jittering
      expect(values.map((x) => Math.trunc(x / 100) * 100)).to.be.deep.equal([
        100, 500, 2000, 2000, 2000, 2000,
      ])
      subject.success()
      expect(Math.trunc(subject.nextDelay() / 100) * 100).equals(100)
    })
    it('generates exponential delays with failedAttempts', () => {
      const subject = new RetryStrategyImpl({
        minRetryDelay: 100,
        maxRetryDelay: 1000,
        retryJitter: 10,
        randomRetry: false,
      })
      const values = [1, 2, 3, 4, 5, 6].reduce((acc, val) => {
        acc.push(subject.nextDelay(new Error(), val))
        return acc
      }, [] as number[])
      expect(values).to.have.length(6)
      values.forEach((x, i) => {
        if (i > 0) {
          expect(Math.max(Math.trunc(x / 100), 10)).to.not.be.lessThan(
            Math.max(Math.trunc(values[i - 1] / 100), 10)
          )
        }
        expect(x).to.not.be.greaterThan(1000 + 10)
      })
    })
  })
  describe('random interval', () => {
    it('generates exponential data from randomized windows', () => {
      const options = {
        minRetryDelay: 100,
        maxRetryDelay: 1000,
        retryJitter: 100,
        exponentialBase: 2,
        randomRetry: true,
      }
      const subject = new RetryStrategyImpl(options)
      const values = [1, 2, 3, 4, 5].reduce((acc, _val, index) => {
        acc.push(subject.nextDelay(undefined, index + 1))
        return acc
      }, [] as number[])
      const intervals = [
        [100, 200],
        [200, 400],
        [400, 800],
        [800, 1000],
        [800, 1000],
      ]
      for (let i = 0; i < values.length; i++) {
        expect(values[i]).is.gte(
          intervals[i][0],
          `${i} number ${values[i]} failed`
        )
        expect(values[i]).is.lte(
          intervals[i][1] + subject.options.retryJitter,
          `${i} number ${values[i]} failed`
        )
      }
      subject.success()
      expect(Math.trunc(subject.nextDelay() / 100) * 100).is.lessThanOrEqual(
        options.minRetryDelay + options.retryJitter
      )
    })
  })
})
