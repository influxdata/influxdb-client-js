import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import NodeHttpTransport from '../../../../src/impl/node/NodeHttpTransport'
import {ConnectionOptions} from '../../../../src/options'
import {SendOptions} from '../../../../src/transport'
import Cancellable from '../../../../src/util/Cancellable'
import * as http from 'http'
import * as https from 'https'
import sinon from 'sinon'
import {Readable} from 'stream'
import zlib from 'zlib'
import {CLIENT_LIB_VERSION} from '../../../../src/impl/version'

function sendTestData(
  connectionOptions: ConnectionOptions,
  sendOptions: SendOptions,
  setCancellable?: (cancellable: Cancellable) => void
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('timeouted')), 10000)
    let data = ''
    new NodeHttpTransport(connectionOptions).send('/test', '', sendOptions, {
      next(chunk: any) {
        data += chunk.toString()
      },
      error(error: any) {
        clearTimeout(timeout)
        reject(error)
      },
      complete(): void {
        clearTimeout(timeout)
        resolve(data)
      },
      useCancellable(cancellable: Cancellable) {
        if (setCancellable) setCancellable(cancellable)
      },
    })
  })
}
const TEST_URL = 'http://test:9999'

describe('NodeHttpTransport', () => {
  describe('constructor', () => {
    it('creates the transport from http url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:9999',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '9999',
        protocol: 'http:',
        timeout: 10000,
        url: 'http://test:9999',
      })
      expect(transport.requestApi).to.equal(http.request)
    })
    it('creates the transport from https url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'https://test:9999',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '9999',
        protocol: 'https:',
        timeout: 10000,
        url: 'https://test:9999',
      })
      expect(transport.requestApi).to.equal(https.request)
    })
    it('does not create the transport from other uri', () => {
      expect(
        () =>
          new NodeHttpTransport({
            url: 'other://test:9999',
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
    describe('positive', () => {
      const transportOptions = {
        url: TEST_URL,
        timeout: 100,
      }
      const extraOptions = [
        {},
        {
          token: 'a',
        },
        {cancel: true},
        {
          headers: {
            'accept-encoding': 'gzip',
          },
        },
      ]
      for (let i = 0; i < extraOptions.length; i++) {
        const extras = extraOptions[i]
        const responseData = 'yes'
        it(`works with options ${JSON.stringify(extras)}`, async () => {
          const nextFn = sinon.fake()
          await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(
              () => reject(new Error('timeouted')),
              10000
            )
            let responseRead = false
            const context = nock(transportOptions.url)
              .post('/test')
              .reply((_uri, _requestBody) => [
                200,
                new Readable({
                  read(): any {
                    const encode = !!(extras.headers || {})['accept-encoding']
                    if (encode) {
                      this.push(
                        responseRead ? null : zlib.gzipSync(responseData)
                      )
                    } else {
                      this.push(responseRead ? null : responseData)
                    }
                    responseRead = true
                  },
                }),
                {
                  'content-encoding': (
                    _req: any,
                    _res: any,
                    _body: any
                  ): string =>
                    (extras.headers || {})['accept-encoding'] || 'identity',
                },
              ])
              .persist()
            if (extras.token) {
              context.matchHeader('authorization', 'Token ' + extras.token)
            }
            context.matchHeader(
              'User-Agent',
              `influxdb-client-js/${CLIENT_LIB_VERSION}`
            )
            let cancellable: any
            new NodeHttpTransport({
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
                  reject(new Error('No error expected!, but: ' + error))
                },
                complete(): void {
                  clearTimeout(timeout)
                  resolve()
                },
                useCancellable(toUse: Cancellable): void {
                  cancellable = toUse
                },
              }
            )
            if (extras.cancel) {
              cancellable.cancel()
            }
          })
            .then(() => {
              expect(nextFn.called)
              if (!extras.cancel) {
                expect(nextFn.args[0][0].toString()).to.equal(responseData)
              }
            })
            .catch(e => {
              expect.fail(undefined, e, e.toString())
            })
        })
      }
    })
    describe('negative', () => {
      const transportOptions = {
        url: TEST_URL,
        timeout: 100,
        maxRetries: 0,
      }
      it(`fails silently on server error`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .reply(500, 'not ok')
        expect(
          new NodeHttpTransport(transportOptions).send('/test', '', {
            method: 'GET',
          })
        ).to.not.throw
      })
      it(`fails on server error`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .reply(500, 'not ok')
        await sendTestData(transportOptions, {method: 'GET'})
          .then(() => {
            expect.fail('must not succeed')
          })
          .catch(e => {
            expect(e)
              .property('statusCode')
              .to.equal(500)
          })
      })
      it(`fails on decoding error`, async () => {
        let responseRead = false
        nock(transportOptions.url)
          .get('/test')
          .reply((_uri, _requestBody) => [
            200,
            new Readable({
              read(): any {
                this.push(responseRead ? null : 'no')
                responseRead = true
              },
            }),
            {
              'content-encoding': 'gzip',
            },
          ])
          .persist()
        await sendTestData(transportOptions, {method: 'GET'})
          .then(() => {
            expect.fail('must not succeed')
          })
          .catch(e => {
            expect(e)
              .property('message')
              .is.not.equal('must not succeed')
            expect(e.toString()).does.not.include('time') // not timeout
          })
      })
      it(`fails on socket timeout`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .socketDelay(2000)
          .reply(200, 'ok')
        await sendTestData({...transportOptions, timeout: 100}, {method: 'GET'})
          .then(() => {
            throw new Error('must not succeed')
          })
          .catch(e => {
            expect(e.toString()).to.include('timed')
          })
      })
      it(`fails on connection timeout`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .delayConnection(2000)
          .reply(200, 'ok')
        await sendTestData({...transportOptions, timeout: 100}, {method: 'GET'})
          .then(() => {
            throw new Error('must not succeed')
          })
          .catch(e => {
            expect(e.toString()).to.include('timed')
          })
      })
      it(`fails on response timeout`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .delay(2000)
          .reply(200, 'ok')
        await sendTestData({...transportOptions, timeout: 100}, {method: 'GET'})
          .then(() => {
            throw new Error('must not succeed')
          })
          .catch(e => {
            expect(e.toString()).to.include('timed')
          })
      })
      it(`truncates error messages`, async () => {
        let bigMessage = 'this is a big error message'
        while (bigMessage.length < 1001) bigMessage += bigMessage
        nock(transportOptions.url)
          .get('/test')
          .reply(500, bigMessage)
        await sendTestData(transportOptions, {method: 'GET'})
          .then(() => {
            throw new Error('must not succeed')
          })
          .catch((e: any) => {
            expect(e)
              .property('body')
              .to.length(1000)
          })
      })
      it(`is aborted before the whole response arrives`, async () => {
        let remainingChunks = 2
        let res: any
        nock(transportOptions.url)
          .get('/test')
          .reply((_uri, _requestBody) => [
            200,
            new Readable({
              read(): any {
                remainingChunks--
                if (!remainingChunks) {
                  res.emit('aborted')
                }
                this.push(remainingChunks < 0 ? null : '.')
              },
            }),
            {
              'X-Whatever': (_req: any, _res: any, _body: any): string => {
                res = _res
                return '1'
              },
            },
          ])
          .persist()
        await sendTestData(transportOptions, {method: 'GET'})
          .then(_data => {
            expect.fail('not expected!')
          })
          .catch((e: any) => {
            expect(e)
              .property('message')
              .to.include('aborted')
          })
      })
      it(`signalizes error upon request's error'`, async () => {
        let remainingChunks = 2
        let req: any
        nock(transportOptions.url)
          .get('/test')
          .reply((_uri, _requestBody) => [
            200,
            new Readable({
              read(): any {
                remainingChunks--
                if (!remainingChunks) {
                  req.emit('error', new Error('request failed'))
                }
                this.push(remainingChunks < 0 ? null : '.')
              },
            }),
            {
              'X-Whatever': (_req: any, _res: any, _body: any): string => {
                req = _req
                return '1'
              },
            },
          ])
          .persist()
        await sendTestData(transportOptions, {method: 'GET'})
          .then(_data => {
            expect.fail('not expected!')
          })
          .catch((e: any) => {
            expect(e)
              .property('message')
              .to.include('request failed')
          })
      })
    })
    describe('cancelled', () => {
      const transportOptions = {
        url: TEST_URL,
        timeout: 100,
        maxRetries: 0,
      }
      it(`is cancelled before the response arrives`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .socketDelay(2000)
          .reply(200, 'yes')
          .persist()
        await sendTestData(
          {...transportOptions, timeout: 1000},
          {method: 'GET'},
          cancellable => cancellable.cancel()
        )
          .then(data => {
            expect(data).to.equal('')
          })
          .catch(e => {
            throw e
          })
      })
      it(`is canceled after reading the second chunk`, async () => {
        let cancellable: any
        let remainingChunks = 2
        nock(transportOptions.url)
          .get('/test')
          .reply(
            200,
            (_uri, _requestBody) =>
              new Readable({
                read(): any {
                  remainingChunks--
                  if (!remainingChunks) {
                    cancellable.cancel()
                  }
                  this.push(remainingChunks < 0 ? null : '.')
                },
              })
          )
          .persist()
        await sendTestData(
          {...transportOptions, timeout: 10000},
          {method: 'GET'},
          toSet => (cancellable = toSet)
        )
          .then(data => {
            expect(data).to.equal('')
          })
          .catch(e => {
            throw e
          })
      })
    })
  })

  describe('request', () => {
    beforeEach(() => {
      nock.disableNetConnect()
    })
    afterEach(() => {
      nock.cleanAll()
      nock.enableNetConnect()
    })
    const transportOptions = {
      url: TEST_URL,
      timeout: 100,
      maxRetries: 0,
    }
    ;([
      [null, ''],
      ['', ''],
      ['a', 'a'],
      [{yes: true}, '{"yes":true}'],
    ] as Array<Array<any>>).forEach((pair, i) => {
      it(`returns string response ${i}`, async () => {
        let remainingChunks = 2
        let body: any = undefined
        nock(transportOptions.url)
          .get('/test')
          .reply(
            200,
            (_uri, requestBody) => {
              body = requestBody
              return new Readable({
                read(): any {
                  remainingChunks--
                  this.push(remainingChunks < 0 ? null : '.')
                },
              })
            },
            {
              'content-type': 'text/plain',
            }
          )
          .persist()
        const retVal = await new NodeHttpTransport({
          ...transportOptions,
          timeout: 10000,
        }).request('/test', pair[0], {
          method: 'GET',
          headers: {'content-type': 'text/plain'},
        })
        expect(retVal).equals('..')
        expect(body).equals(pair[1])
      })
    })
    ;([
      [{yes: true}, {yes: true}, 'application/json'],
      // eslint-disable-next-line no-undef
      ['abcd', Buffer.from('abcd'), 'application/binary'],
    ] as Array<Array<any>>).forEach(pair => {
      it(`returns ${pair[2]} response`, async () => {
        nock(transportOptions.url)
          .get('/test')
          .reply(
            200,
            (_uri, requestBody) => {
              return requestBody
            },
            {
              'content-type': pair[2],
            }
          )
          .persist()
        const retVal = await new NodeHttpTransport({
          ...transportOptions,
          timeout: 10000,
        }).request('/test', pair[0], {
          method: 'GET',
          headers: {'content-type': pair[2]},
        })
        expect(retVal).deep.equals(pair[1])
      })
    })
    it(`fails on invalid json`, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(200, '..', {
          'content-type': 'application/json',
        })
        .persist()
      try {
        await new NodeHttpTransport({
          ...transportOptions,
          timeout: 10000,
        }).request('/test', '', {
          method: 'GET',
          headers: {'content-type': 'applicaiton/json'},
        })
        expect.fail(`exception shall be thrown because of wrong JSON`)
      } catch (e) {
        expect(e)
      }
    })
    it(`fails on communication error`, async () => {
      try {
        await new NodeHttpTransport({
          ...transportOptions,
          timeout: 10000,
        }).request('/test', '', {
          method: 'GET',
          headers: {'content-type': 'applicaiton/json'},
        })
        expect.fail(`exception shall be thrown because of wrong JSON`)
      } catch (e) {
        expect(e)
      }
    })
  })
})
