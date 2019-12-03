import {expect} from 'chai'
import {
  canRetryHttpCall,
  HttpError,
  RequestTimedOutError,
  ResponseAbortedError,
  IllegalArgumentError,
  RetriableDecision,
} from '../../src/client/errors'

describe('errors', () => {
  describe('retriable errors', () => {
    const testSetOK = [
      new HttpError(503, 'Service Unavailable'),
      new HttpError(429, 'Too Many Requests'),
      new RequestTimedOutError(),
      new ResponseAbortedError(),
      new HttpError(429, 'Too Many Requests'),
      (() => {
        const err = new Error('Connection reset')
        ;(err as any).code = 'ECONNRESET'
        return err
      })(),
    ]
    testSetOK.forEach(error => {
      it('retries ' + error, () => {
        expect(canRetryHttpCall(error)).to.be.true
      })
    })
    const testSetNotOK = [
      null,
      undefined,
      'whatever',
      new HttpError(500, 'Internal Server Error', 'this is body'),
      new IllegalArgumentError('illegal argument'),
      new Error(''),
    ]
    testSetNotOK.forEach(error => {
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
      ,
      {error: new RequestTimedOutError(), retryAfter: -1},
      {error: new ResponseAbortedError(), retryAfter: -1},
    ]
    testSet.forEach(entry => {
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
      new HttpError(500, 'Internal Server Error', 'this is body'),
      new IllegalArgumentError('illegal argument'),
      new Error(''),
    ]
    testSetNotOK.forEach(error => {
      it('does not retry ' + error, () => {
        expect(canRetryHttpCall(error)).to.be.false
      })
    })
  })
})
