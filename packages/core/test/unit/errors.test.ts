import {expect} from 'chai'
import {
  canRetryHttpCall,
  getRetryDelay,
  HttpError,
  RequestTimedOutError,
  AbortError,
  IllegalArgumentError,
  RetriableDecision,
} from '../../src/errors'

describe('errors', () => {
  describe('have standard error properties', () => {
    const pairs: {error: Error; name: string}[] = [
      {error: new HttpError(200, 'OK'), name: 'HttpError'},
      {error: new IllegalArgumentError('Not OK'), name: 'IllegalArgumentError'},
      {error: new RequestTimedOutError(), name: 'RequestTimedOutError'},
      {error: new AbortError(), name: 'AbortError'},
    ]
    pairs.forEach(({error, name}) => {
      describe(`${name}`, () => {
        it('has descriptive name property', () => {
          expect(error.name).equals(name)
        })
        it('has message property', () => {
          expect(error.message).is.not.empty
        })
        it('has expected toString', () => {
          expect(error.toString()).matches(new RegExp(`^${name}:.*`))
        })
      })
    })
  })
  describe('message property is defined', () => {
    expect(new HttpError(200, 'OK').message).is.not.empty
    expect(new IllegalArgumentError('Not OK').message).is.not.empty
    expect(new RequestTimedOutError().message).is.not.empty
    expect(new AbortError().message).is.not.empty
  })
  describe('retriable errors', () => {
    const testSetOK = [
      new HttpError(503, 'Service Unavailable'),
      new HttpError(429, 'Too Many Requests'),
      new RequestTimedOutError(),
      new AbortError(),
      new HttpError(429, 'Too Many Requests', '', '2019-11-02'),
      ((): Error => {
        const err = new Error('Connection reset')
        ;(err as any).code = 'ECONNRESET'
        return err
      })(),
    ]
    testSetOK.forEach((error) => {
      it('retries ' + error, () => {
        expect(canRetryHttpCall(error)).to.be.true
        if (error instanceof HttpError) {
          expect(error.retryAfter()).to.be.equal(0)
        }
      })
    })
    const testSetNotOK = [
      null,
      undefined,
      'whatever',
      new HttpError(400, 'Bad Request', 'this is body'),
      new IllegalArgumentError('illegal argument'),
      new Error(''),
    ]
    testSetNotOK.forEach((error) => {
      it('does not retry ' + error, () => {
        expect(canRetryHttpCall(error)).to.be.false
      })
    })
  })
  describe('retriable decisions', () => {
    const testSet: any[] = [
      {
        error: new HttpError(503, 'Service Unavailable', '', '10'),
        retryAfter: 10,
      },
      {error: new RequestTimedOutError(), retryAfter: 0},
      {error: new AbortError(), retryAfter: 0},
    ]
    testSet.forEach((entry) => {
      it(`retries ${entry.error} in ${entry.retryAfter} ms`, () => {
        expect((entry.error as RetriableDecision).retryAfter()).to.be.equal(
          entry.retryAfter
        )
      })
    })
    const testSetNotOK = [
      null,
      undefined,
      'whatever',
      new HttpError(400, 'Bad Request', 'this is body'),
      new IllegalArgumentError('illegal argument'),
      new Error(''),
    ]
    testSetNotOK.forEach((error) => {
      it('does not retry ' + error, () => {
        expect(canRetryHttpCall(error)).to.be.false
      })
    })
  })
  describe('retriable delay', () => {
    const testSet: any[] = [
      {
        error: new HttpError(503, 'Service Unavailable', '', '10'),
        retryAfter: 10,
      },
      {error: new RequestTimedOutError(), retryAfter: 0},
      {error: new AbortError(), retryAfter: 0},
      {error: new Error(), retryAfter: 0},
      {error: '', retryAfter: 0},
      {error: null, retryAfter: 0},
      {error: undefined, retryAfter: 0},
    ]
    testSet.forEach((entry) => {
      it(`retries ${entry.error} in ${
        entry.retryAfter === -1 ? '>=1' : entry.retryAfter
      } ms`, () => {
        let val = getRetryDelay(entry.error, 1000)
        if (entry.retryAfter === 0) {
          expect(val).to.not.be.lessThan(0)
        } else {
          expect(val).to.be.equal(entry.retryAfter)
        }
        val = getRetryDelay(entry.error, 0)
        expect(val).to.be.equal(entry.retryAfter)
        val = getRetryDelay(entry.error)
        expect(val).to.be.equal(entry.retryAfter)
      })
    })
  })
})
