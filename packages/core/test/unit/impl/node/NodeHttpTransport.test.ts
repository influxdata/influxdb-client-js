import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import NodeHttpTransport from '../../../../src/impl/node/NodeHttpTransport'
import {ConnectionOptions} from '../../../../src/options'
import {SendOptions} from '../../../../src/transport'
import {Cancellable} from '../../../../src/results'
import * as http from 'http'
import * as https from 'https'
import sinon from 'sinon'
import {Readable} from 'stream'
import zlib from 'zlib'
import {CLIENT_LIB_VERSION} from '../../../../src/impl/version'
import {CollectedLogs, collectLogging} from '../../../util'

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
const TEST_URL = 'http://test:8086'

describe('NodeHttpTransport', () => {
  describe('constructor', () => {
    let logs: CollectedLogs
    beforeEach(() => {
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      collectLogging.after()
    })
    it('creates the transport from http url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:8086',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '8086',
        protocol: 'http:',
        timeout: 10000,
        url: 'http://test:8086',
      })
      expect(transport.requestApi).to.equal(http.request)
    })
    it('creates the transport from https url', () => {
      const transport: any = new NodeHttpTransport({
        url: 'https://test:8086',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '8086',
        protocol: 'https:',
        timeout: 10000,
        url: 'https://test:8086',
      })
      expect(transport.requestApi).to.equal(https.request)
    })
    it('creates the transport with contextPath', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:8086/influx',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '8086',
        protocol: 'http:',
        timeout: 10000,
        url: 'http://test:8086/influx',
      })
      expect(transport.contextPath).equals('/influx')
    })
    it('creates the transport with contextPath/', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:8086/influx/',
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '8086',
        protocol: 'http:',
        timeout: 10000,
        url: 'http://test:8086/influx/',
      })
      expect(transport.contextPath).equals('/influx')
    })
    it('does not create the transport from other uri', () => {
      expect(
        () =>
          new NodeHttpTransport({
            url: 'other://test:8086',
          })
      ).to.throw()
    })
    it('warn about unsupported /api/v2 context path', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:8086/api/v2',
      })
      // don;t use context path at all
      expect(transport.contextPath).equals('')
      expect(logs.warn).is.deep.equal([
        [
          "Please remove '/api/v2' context path from InfluxDB base url, using http://test:8086 !",
          undefined,
        ],
      ])
    })
    it('ignores undefined values', () => {
      const transport: any = new NodeHttpTransport({
        url: 'http://test:8086',
        timeout: undefined,
      })
      expect(transport.defaultOptions).to.deep.equal({
        hostname: 'test',
        port: '8086',
        protocol: 'http:',
        url: 'http://test:8086',
      })
      expect(transport.requestApi).to.equal(http.request)
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
        {contextPath: '/context'},
      ]
      for (let i = 0; i < extraOptions.length; i++) {
        const extras = extraOptions[i]
        const responseData = 'yes'
        it(`works with options ${JSON.stringify(extras)}`, async () => {
          const nextFn = sinon.fake()
          const responseStartedFn = sinon.fake()
          await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(
              () => reject(new Error('timeouted')),
              10000
            )
            let responseRead = false
            const context = nock(transportOptions.url)
              .post((extras.contextPath ?? '') + '/test')
              .reply((_uri, _requestBody) => [
                200,
                new Readable({
                  read(): any {
                    const encode = !!(extras.headers ?? {})['accept-encoding']
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
                    (extras.headers ?? {})['accept-encoding'] ?? 'identity',
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
              url: transportOptions.url + (extras.contextPath ?? ''),
            }).send(
              '/test',
              '',
              {...extras, method: 'POST'},
              {
                responseStarted: responseStartedFn,
                next: nextFn,
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
          }).then(
            () => {
              if (!extras.cancel) {
                expect(nextFn.callCount).equals(1)
                expect(responseStartedFn.callCount).equals(1)
                expect(responseStartedFn.args[0][1]).equals(200)
                expect(nextFn.args[0][0].toString()).to.equal(responseData)
              } else {
                expect(nextFn.callCount).equals(0)
                expect(responseStartedFn.callCount).equals(0)
              }
            },
            e => {
              expect.fail(undefined, e, e.toString())
            }
          )
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
      it(`parses error responses`, async () => {
        let bigMessage = ',"this is a big error message"'
        while (bigMessage.length < 1001) bigMessage += bigMessage
        bigMessage = `{"code":"mc","message":"mymsg","details":[""${bigMessage}]}`
        nock(transportOptions.url)
          .get('/test')
          .reply(400, bigMessage, {'content-type': 'application/json'})
        await sendTestData(transportOptions, {method: 'GET'}).then(
          () => {
            throw new Error('must not succeed')
          },
          (e: any) => {
            expect(e)
              .property('body')
              .to.length(bigMessage.length)
            expect(e)
              .property('json')
              .deep.equals(JSON.parse(bigMessage))
            expect(e)
              .property('code')
              .equals('mc')
            expect(e)
              .property('message')
              .equals('mymsg')
          }
        )
      })
      it(`uses X-Influxdb-Error header when no body is returned`, async () => {
        const errorMessage = 'this is a header error message'
        nock(transportOptions.url)
          .get('/test')
          .reply(500, '', {'X-Influxdb-Error': errorMessage})
        await sendTestData(transportOptions, {method: 'GET'})
          .then(() => {
            throw new Error('must not succeed')
          })
          .catch((e: any) => {
            expect(e)
              .property('body')
              .equals(errorMessage)
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
    it(`return text even without explicit request headers `, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(200, '..', {
          'content-type': 'application/text',
        })
        .persist()
      const data = await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      }).request('/test', '', {
        method: 'GET',
      })
      expect(data).equals('..')
    })
    it(`returns response headers and status code `, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(202, '', {
          'content-type': 'application/text',
          'custom-header': 'custom-val',
        })
        .persist()
      let responseCustomHeader: string | undefined
      let responseStatus: number | undefined
      const data = await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      }).request(
        '/test',
        '',
        {
          method: 'GET',
        },
        (headers, status) => {
          responseCustomHeader = String(headers['custom-header'])
          responseStatus = status
        }
      )
      expect(data).equals('')
      expect(responseCustomHeader).equals('custom-val')
      expect(responseStatus).equals(202)
    })
    it(`return text for CSV response`, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(200, '..', {
          'content-type': 'application/csv',
        })
        .persist()
      const data = await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      }).request('/test', '', {
        method: 'GET',
      })
      expect(data).equals('..')
    })
    it(`fails on invalid json`, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(200, '..', {
          'content-type': 'application/json',
        })
        .persist()
      await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      })
        .request('/test', '', {
          method: 'GET',
          headers: {'content-type': 'application/json'},
        })
        .then(
          () => expect.fail(`exception shall be thrown because of wrong JSON`),
          () => true // OK that it fails
        )
    })
    it(`does not follow redirects OOTB`, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(301, '..', {
          location: '/redirected',
        })
        .persist()
      await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      })
        .request('/test', '', {
          method: 'GET',
          headers: {'content-type': 'application/json'},
        })
        .then(
          () => expect.fail(`exception shall be thrown because of redirect`),
          () => true // OK that it fails
        )
    })
    it(`can be configured to follow redirects`, async () => {
      nock(transportOptions.url)
        .get('/test')
        .reply(301, '..', {
          location: '/redirected',
        })
        .get('/redirected')
        .reply(200, 'OK', {'content-type': 'text/plain'})
        .persist()
      const data = await new NodeHttpTransport({
        ...transportOptions,
        transportOptions: {
          'follow-redirects': require('follow-redirects'),
        },
        timeout: 10000,
      }).request('/test', '', {
        method: 'GET',
      })
      expect(data).equals('OK')
    })
    it(`fails on communication error`, async () => {
      await new NodeHttpTransport({
        ...transportOptions,
        timeout: 10000,
      })
        .request('/test', '', {
          method: 'GET',
          headers: {'content-type': 'application/json'},
        })
        .then(
          () =>
            expect.fail(
              `exception shall be thrown because of communication error`
            ),
          () => true // OK that it fails
        )
    })
  })
})
