import FetchTransport from '../../../../src/impl/browser/FetchTransport'
import {expect} from 'chai'
import {
  removeFetchApi,
  emulateFetchApi,
  AbortController,
} from './emulateBrowser'
import sinon from 'sinon'
import {SendOptions, Cancellable, CommunicationObserver} from '../../../../src'
import {CollectedLogs, collectLogging} from '../../../util'
import {waitForCondition} from '../../util/waitForCondition'

describe('FetchTransport', () => {
  afterEach(() => {
    removeFetchApi()
  })

  describe('constructor', () => {
    let logs: CollectedLogs
    beforeEach(() => {
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      collectLogging.after()
    })
    it('creates the transport with url', () => {
      const options = {
        url: 'http://test:8086',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.defaultHeaders).to.deep.equal({
        'content-type': 'application/json; charset=utf-8',
      })
      expect(transport.connectionOptions).to.deep.equal(options)
    })
    it('creates the transport with url and token', () => {
      const options = {
        url: 'http://test:8086',
        token: 'a',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.defaultHeaders).to.deep.equal({
        'content-type': 'application/json; charset=utf-8',
        Authorization: 'Token a',
      })
      expect(transport.connectionOptions).to.deep.equal(options)
    })
    it('ignore last slash / in url', () => {
      const options = {
        url: 'http://test:8086/',
        token: 'a',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.url).equals('http://test:8086')
    })
    it('ignore /api/v2 suffix in url', () => {
      const options = {
        url: 'http://test:8086/api/v2',
        token: 'a',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.url).equals('http://test:8086')
      expect(logs.warn).is.deep.equal([
        [
          "Please remove '/api/v2' context path from InfluxDB base url, using http://test:8086 !",
          undefined,
        ],
      ])
    })
  })
  describe('request', () => {
    const transport = new FetchTransport({url: 'http://test:8086'})
    it('receives json data', async () => {
      emulateFetchApi({
        headers: {'content-type': 'application/json'},
        body: '{}',
      })
      const response = await transport.request(
        '/whatever',
        {anything: 'here'},
        {
          method: 'POST',
        }
      )
      expect(response).is.deep.equal({})
    })
    it('receives text data', async () => {
      emulateFetchApi({
        headers: {'content-type': 'text/plain'},
        body: '{}',
      })
      const response = await transport.request('/whatever', '', {
        method: 'GET',
      })
      expect(response).is.deep.equal('{}')
    })
    it('receives custom headers', async () => {
      const transport = new FetchTransport({
        url: 'http://test:8086',
        headers: {extra: 'yes'},
      })
      let options: any
      emulateFetchApi(
        {
          headers: {'content-type': 'text/plain'},
          body: '{}',
        },
        (opts) => {
          options = opts
        }
      )
      const response = await transport.request('/whatever', '', {
        method: 'GET',
      })
      expect(response).is.deep.equal('{}')
      expect(options?.headers?.extra).equals('yes')
    })
    it('allows to transform requests', async () => {
      let lastRequest: any
      emulateFetchApi(
        {
          headers: {'content-type': 'text/plain'},
          body: '{}',
        },
        (req) => (lastRequest = req)
      )
      const transport = new FetchTransport({url: 'http://test:8086'})
      transport.requestDecorator = (request): void => {
        request.body = 'modified'
      }
      await transport.request('/whatever', '', {
        method: 'POST',
      })
      expect(lastRequest).property('body').equals('modified')
    })
    it('receives also response headers', async () => {
      emulateFetchApi({
        headers: {'content-type': 'application/json'},
        body: '{}',
      })
      let responseMeta: any
      const response = await transport.request(
        '/whatever',
        {anything: 'here'},
        {
          method: 'POST',
        },
        function (headers, status) {
          responseMeta = [headers, status]
        }
      )
      expect(response).is.deep.equal({})
      expect(responseMeta).is.deep.equal([
        {'content-type': 'application/json'},
        200,
      ])
    })
    it('receives text data for application/csv', async () => {
      emulateFetchApi({
        headers: {'content-type': 'application/csv'},
        body: '{}',
      })
      const response = await transport.request('/whatever', '', {
        method: 'GET',
      })
      expect(response).is.deep.equal('{}')
    })
    it('receives text data even if response is application/json', async () => {
      emulateFetchApi({
        headers: {'content-type': 'application/json; charset=utf-8'},
        body: '{}',
      })
      const response = await transport.request('/whatever', '', {
        method: 'GET',
        headers: {accept: 'text/plain'},
      })
      expect(response).is.deep.equal('{}')
    })
    it('receives no data for HEAD method', async () => {
      emulateFetchApi({
        headers: {},
        body: '{}',
      })
      const response = await transport.request('/whatever', '', {
        method: 'HEAD', // can be any other
      })
      expect(response).is.equal(undefined)
    })
    it('throws error when unable to read response body', async () => {
      emulateFetchApi({
        headers: {'content-type': 'text/plain'},
        body: 'error',
      })
      await transport
        .request('/whatever', '', {
          method: 'POST',
        })
        .then(
          () => Promise.reject('client error expected'),
          (e: any) => expect(e).property('message').equals('error data') //thrown by emulator
        )
    })
    it('throws error', async () => {
      emulateFetchApi({
        headers: {'content-type': 'application/json'},
        body: '{}',
        status: 500,
      })
      await transport
        .request('/whatever', '', {
          method: 'GET',
        })
        .then(
          () => Promise.reject('client error expected'),
          () => true // OK error
        )
    })
    it('throws error with X-Influxdb-Error header body', async () => {
      const message = 'this is a header message'
      emulateFetchApi({
        headers: {
          'content-type': 'application/json',
          'x-influxdb-error': message,
        },
        body: '',
        status: 500,
      })
      await transport
        .request('/whatever', '', {
          method: 'GET',
        })
        .then(
          () => Promise.reject('client error expected'),
          (e: any) => expect(e).property('body').equals(message)
        )
    })
    it('throws error with empty body', async () => {
      emulateFetchApi({
        headers: {'content-type': 'text/plain'},
        body: '',
        status: 500,
      })
      await transport
        .request('/whatever', '', {
          method: 'GET',
        })
        .then(
          () => Promise.reject('client error expected'),
          (e: any) => expect(e).property('body').equals('')
        )
    })
    it('throws error with json body', async () => {
      const body = '{"code":"mycode","message":"mymsg"}'
      emulateFetchApi({
        headers: {'content-type': 'application/json'},
        body,
        status: 500,
      })
      await transport
        .request('/whatever', '', {
          method: 'GET',
        })
        .then(
          () => Promise.reject('client error expected'),
          (e: any) => {
            expect(e).property('body').equals(body)
            expect(e).property('json').deep.equals(JSON.parse(body))
            expect(e).property('message').equals('mymsg')
            expect(e).property('code').equals('mycode')
          }
        )
    })
    it('uses custom transport options', async () => {
      let request: any
      emulateFetchApi(
        {
          headers: {'content-type': 'text/plain'},
          body: '{}',
        },
        (req) => (request = req)
      )
      await transport.request('/whatever', '', {
        method: 'GET',
      })
      expect(request?.credentials).is.deep.equal('omit')
      const custom = new FetchTransport({
        url: 'http://test:8086',
        transportOptions: {credentials: 'my-val'},
      })
      await custom.request('/whatever', '', {
        method: 'GET',
      })
      expect(request?.credentials).is.deep.equal('my-val')
    })
  })
  describe('send', () => {
    const transport = new FetchTransport({url: 'http://test:8086'})
    function fakeCallbacks(): any {
      return {
        next: sinon.fake(),
        error: sinon.fake(),
        complete: sinon.fake(),
        useCancellable: sinon.spy((c: Cancellable): void => {
          expect(c.isCancelled()).is.equal(false) // not cancelled
        }),
        responseStarted: sinon.fake(),
      }
    }
    ;[
      {
        body: 'a',
        status: 201,
      },
      {
        body: 'a',
        url: 'error',
        callbacks: fakeCallbacks(),
      },
      {
        body: [Buffer.from('a'), Buffer.from('b')],
        callbacks: fakeCallbacks(),
      },
      {
        body: Buffer.from('a'),
        callbacks: fakeCallbacks(),
      },
      {
        body: 'a',
        callbacks: fakeCallbacks(),
      },
      {
        body: 'a',
        callbacks: fakeCallbacks(),
      },
      {
        url: 'customNext_cancelledAndThenError',
        body: [Buffer.from('a'), Buffer.from('b')],
        callbacks: ((): void => {
          const overriden = fakeCallbacks()
          return {
            ...overriden,
            next(...args: any): void {
              overriden.next.call(overriden, args)
              const cancellable = overriden.useCancellable.args[0][0]
              cancellable.cancel()
              throw new Error()
            },
          }
        })(),
      },
      {
        url: 'customNext_cancelledWithSignal',
        body: [Buffer.from('a'), Buffer.from('b')],
        signal: new AbortController(true).signal,
        callbacks: ((): void => {
          const overriden = fakeCallbacks()
          overriden.useCancellable = sinon.spy((c: Cancellable): void => {
            expect(c.isCancelled()).is.equal(true) // cancelled because of aborted signal
          })
          return {
            ...overriden,
            next(...args: any): void {
              overriden.next.call(overriden, args)
              const cancellable = overriden.useCancellable.args[0][0]
              cancellable.cancel()
              throw new Error()
            },
          }
        })(),
      },
      {
        url: 'customNext_nextError',
        body: 'a',
        callbacks: ((): void => {
          const overriden = fakeCallbacks()
          return {
            ...overriden,
            next(...args: any): void {
              overriden.next.call(overriden, args)
              throw new Error('unexpected error')
            },
          }
        })(),
        status: 222, // value other than 200 instructs the test to check for error
      },
      {
        body: 'error',
        callbacks: fakeCallbacks(),
        status: 501,
      },
      {
        body: '',
        callbacks: fakeCallbacks(),
        status: 500,
        headers: {'x-influxdb-error': 'header error'},
        errorBody: 'header error',
      },
      {
        body: '',
        callbacks: fakeCallbacks(),
        status: 500,
        errorBody: '',
      },
      {
        body: 'this is error message',
        callbacks: fakeCallbacks(),
        status: 500,
        errorBody: 'this is error message',
      },
    ].forEach(
      (
        {
          body,
          callbacks,
          url = '/whatever',
          status = 200,
          headers = {},
          errorBody,
          signal,
        },
        i
      ) => {
        it(`receives data in chunks ${i} (${url})`, async () => {
          emulateFetchApi({
            headers: {
              'content-type': 'text/plain',
              duplicate: 'ok',
              ...headers,
            },
            status,
            body,
          })
          if (callbacks) {
            await new Promise((resolve: any) =>
              transport.send(url, '', {method: 'POST', signal} as SendOptions, {
                ...callbacks,
                complete() {
                  callbacks.complete && callbacks.complete()
                  resolve()
                },
                error(e: Error) {
                  callbacks.error && callbacks.error(e)
                  resolve()
                },
              })
            )
            if (callbacks.useCancellable) {
              expect(callbacks.useCancellable.callCount).equals(1)
              const cancellable = callbacks.useCancellable.args[0][0]
              cancellable.cancel()
              expect(cancellable.isCancelled()).is.equal(true)
            }
            if (url === 'error') {
              expect(callbacks.responseStarted.callCount).equals(0)
            } else {
              expect(callbacks.responseStarted.callCount).equals(1)
              expect(callbacks.responseStarted.args[0][1]).equals(status)
            }
            const isError = url === 'error' || status !== 200
            expect(callbacks.error.callCount).equals(isError ? 1 : 0)
            expect(callbacks.complete.callCount).equals(isError ? 0 : 1)
            const customNext = url.startsWith('customNext')
            if (!customNext) {
              expect(callbacks.next.callCount).equals(
                isError ? 0 : Array.isArray(body) ? body.length : 1
              )
            }
            if (!customNext && !isError) {
              const vals = callbacks.next.args.map((args: any) =>
                Buffer.from(args[0])
              )
              expect(
                Array.isArray(body)
                  ? body
                  : [Buffer.isBuffer(body) ? body : Buffer.from(body)]
              ).is.deep.equal(vals)
            } else if (errorBody) {
              expect(callbacks.error.args[0][0])
                .property('body')
                .equals(errorBody)
            }
          } else {
            transport.send('/whatever', '', {method: 'POST'}, callbacks)
          }
        })
      }
    )
    it('uses custom transport options', async () => {
      let request: any
      emulateFetchApi(
        {
          headers: {'content-type': 'text/plain'},
          body: '{}',
        },
        (req) => (request = req)
      )
      await new Promise((resolve) =>
        transport.send(
          'http://test:8086',
          '',
          {method: 'POST'},
          {
            next: sinon.fake(),
            complete: () => resolve(0),
            error: resolve,
          }
        )
      )
      expect(request?.credentials).is.deep.equal('omit')
      await new Promise((resolve) =>
        new FetchTransport({
          url: 'http://test:8086',
          transportOptions: {credentials: 'my-val'},
        }).send(
          'http://test:8086',
          '',
          {method: 'POST'},
          {
            next: sinon.fake(),
            complete: () => resolve(0),
            error: resolve,
          }
        )
      )
      expect(request?.credentials).is.deep.equal('my-val')
    })
  })
  describe('send.backpressure', () => {
    it(`it throws an error when paused and useResume is not set`, async () => {
      emulateFetchApi({body: 'abc'.split('').map(Buffer.from)})
      const observer: CommunicationObserver<Uint8Array> = {
        next(_chunk: Uint8Array) {
          // do not receive more than 1 chunk, but still
          // there is no useResume callback!
          return false
        },
        error() {},
        complete(): void {},
      }
      const spy = sinon.spy(observer)
      new FetchTransport({url: '/test'}).send(
        '/test',
        '',
        {
          method: 'GET',
        },
        spy
      )
      // wait for error being called
      await waitForCondition(() => spy.error.callCount === 1)
      expect(spy.next.callCount).equals(1)
      expect(spy.error.getCall(0).args[0]?.message).contains(
        'useResume is not configured!'
      )
    })
    it(`is paused after the first chunk, then cancelled`, async () => {
      let cancellable: Cancellable | undefined
      let resume: () => void | undefined

      emulateFetchApi({body: 'abc'.split('').map(Buffer.from)})
      const observer: CommunicationObserver<Uint8Array> = {
        next(_chunk: Uint8Array) {
          return false // do not receive more than 1 chunk
        },
        error() {},
        complete(): void {},
        useCancellable(c: Cancellable) {
          cancellable = c
        },
        useResume(r) {
          resume = r
        },
      }
      const spy = sinon.spy(observer)

      new FetchTransport({url: '/test'}).send(
        '/test',
        '',
        {
          method: 'GET',
        },
        spy
      )
      // wait for resume being called
      await waitForCondition(() => cancellable && resume)
      expect(spy.next.callCount).equals(1)
      cancellable?.cancel()
    })
    it.only(`is paused after the second chunk and then read fully`, async () => {
      let resume: (() => void) | undefined
      let chunkNumber = 0
      const responseBody = 'abcd'

      emulateFetchApi({body: responseBody.split('').map(Buffer.from)})
      const observer: CommunicationObserver<Uint8Array> = {
        next(_chunk: Uint8Array) {
          return ++chunkNumber === 2 ? false : undefined // pause at 2nd chunk
        },
        error() {},
        complete(): void {},
        useResume(r) {
          resume = r
        },
      }
      const spy = sinon.spy(observer)

      new FetchTransport({url: '/test'}).send(
        '/test',
        '',
        {
          method: 'GET',
        },
        spy
      )
      // wait for useResume being called
      await waitForCondition(() => resume, 'resume callback is set')
      expect(spy.next.callCount).equals(2)
      expect(resume).is.not.null
      if (resume) resume()
      await waitForCondition(
        () => spy.complete.callCount === 1,
        'response is fully read'
      )
      expect(spy.next.callCount).equals(responseBody.length)
      expect(
        spy.next.args.reduce((acc, [body]) => acc + body.toString(), '')
      ).equals(responseBody)
    })
  })
  describe('chunkCombiner', () => {
    const options = {url: 'http://test:8086'}
    const chunkCombiner = new FetchTransport(options).chunkCombiner
    it('concatenates UInt8Arrays', () => {
      const a1 = Uint8Array.from([1])
      const a2 = Uint8Array.from([2])
      expect(chunkCombiner.concat(a1, a2)).deep.equals(Uint8Array.from([1, 2]))
    })
    it('copies UInt8Arrays', () => {
      const a1 = Uint8Array.from([1, 2, 3])
      const copy = chunkCombiner.copy(a1, 1, 2)
      expect(copy).to.deep.equal(Uint8Array.from([2]))
      a1[1] = 3
      expect(copy[0]).equals(2)
    })
    it('creates UTF-8 strings', () => {
      const a1 = Uint8Array.from([97, 104, 111, 106])
      expect(chunkCombiner.toUtf8String(a1, 2, 3)).equals('o')
    })
  })
})
