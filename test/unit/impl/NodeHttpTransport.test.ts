import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import NodeHttpTransport from '../../../src/client/impl/NodeHttpTransport'
import {DEFAULT_ConnectionOptions} from '../../../src/client/options'
import * as http from 'http'
import * as https from 'https'
import sinon from 'sinon'

describe('NodeHttpTransport', () => {
  describe('constructor', () => {
    it('creates the transport from http url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://localhost:9999',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'localhost',
        maxRetries: 3,
        port: '9999',
        protocol: 'http:',
        retryJitter: 1000,
        timeout: 10000,
        url: 'http://localhost:9999',
      })
      expect(transport.requestApi).to.equal(http.request)
      expect(transport.retryJitter).to.equal(
        DEFAULT_ConnectionOptions.retryJitter
      )
    })
    it('creates the transport from https url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'https://localhost:9999',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'localhost',
        maxRetries: 3,
        port: '9999',
        protocol: 'https:',
        retryJitter: 1000,
        timeout: 10000,
        url: 'https://localhost:9999',
      })
      expect(transport.requestApi).to.equal(https.request)
    })
    it('does not create the transport from other uri', () => {
      expect(
        () =>
          new NodeHttpTransport({
            url: 'other://localhost:9999',
          })
      ).to.throw()
    })
  })
  describe('send', () => {
    beforeEach(() => {
      nock.disableNetConnect()
    })
    afterEach(() => {
      nock.cleanAll()
      nock.enableNetConnect()
    })
    const transportOptions = {
      url: 'http://localhost',
      timeout: 100,
    }
    const extraOptions = [
      {},
      {
        token: 'a',
        maxRetries: 0,
      },
      {cancel: true},
      {maxRetries: 2, timeout: 10000},
    ]
    for (let i = 0; i < extraOptions.length; i++) {
      const extras = extraOptions[i]
      it(`simply works with options ${JSON.stringify(extras)}`, async () => {
        const nextFn = sinon.fake()
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(
            () => reject(new Error('timeouted')),
            10000
          )
          let attempts = 0
          const context = nock(transportOptions.url)
            .post('/test')
            .reply((uri, requestBody) => {
              attempts++
              if (extras.maxRetries && attempts <= extras.maxRetries) {
                console.log('       ... retrying attempt ' + attempts)
                return [429, 'yes', {'retry-after': 10}]
              } else {
                return [200, 'yes']
              }
            })
            .persist()
          if (extras.token) {
            context.matchHeader('authorization', 'Token ' + extras.token)
          }
          const cancellable = new NodeHttpTransport({
            ...extras,
            ...transportOptions,
          }).send(
            '/test',
            '',
            {...extras, method: 'POST'},
            {
              next(data: any) {
                nextFn(data)
              },
              error(error: any) {
                clearTimeout(timeout)
                reject(new Error('No error expected!'))
              },
              complete(): void {
                clearTimeout(timeout)
                resolve()
              },
            }
          )
          if (extras.cancel) {
            cancellable.cancel()
          }
        }).then(() => {
          expect(nextFn.called)
          if (!extras.cancel) {
            expect(nextFn.args[0][0].toString()).to.equal('yes')
          }
        })
        // .catch(e => expect.fail(undefined, e, e.toString()))
      })
    }
  })
})
