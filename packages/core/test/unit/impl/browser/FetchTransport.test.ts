import FetchTransport from '../../../../src/impl/browser/FetchTransport'
import {expect} from 'chai'
import {removeFetchApi, emulateFetchApi} from './emulateBrowser'
import sinon from 'sinon'
import {CLIENT_LIB_VERSION} from '../../../../src/impl/version'

describe('FetchTransport', () => {
  afterEach(() => {
    removeFetchApi()
  })

  describe('constructor', () => {
    it('creates the transport with url', () => {
      const options = {
        url: 'http://test:9999',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.defaultHeaders).to.deep.equal({
        'content-type': 'application/json; charset=utf-8',
        'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`,
      })
      expect(transport.connectionOptions).to.deep.equal(options)
    })
    it('creates the transport with url and token', () => {
      const options = {
        url: 'http://test:9999',
        token: 'a',
      }
      const transport: any = new FetchTransport(options)
      expect(transport.defaultHeaders).to.deep.equal({
        'content-type': 'application/json; charset=utf-8',
        'User-Agent': `influxdb-client-js/${CLIENT_LIB_VERSION}`,
        Authorization: 'Token a',
      })
      expect(transport.connectionOptions).to.deep.equal(options)
    })
  })
  describe('request', () => {
    const transport = new FetchTransport({url: 'http://test:9999'})
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
          (e: any) =>
            expect(e)
              .property('message')
              .equals('error data') //thrown by emulator
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
          (e: any) =>
            expect(e)
              .property('body')
              .equals(message)
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
          (e: any) =>
            expect(e)
              .property('body')
              .equals('')
        )
    })
  })
  describe('send', () => {
    const transport = new FetchTransport({url: 'http://test:9999'})
    function fakeCallbacks(): any {
      return {
        next: sinon.fake(),
        error: sinon.fake(),
        complete: sinon.fake(),
        useCancellable: sinon.fake(),
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
        status: 500,
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
    ].forEach(
      (
        {
          body,
          callbacks,
          url = '/whatever',
          status = 200,
          headers = {},
          errorBody,
        },
        i
      ) => {
        it(`receives data in chunks ${i}`, async () => {
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
              transport.send(
                url,
                '',
                {method: 'POST'},
                {
                  ...callbacks,
                  complete() {
                    callbacks.complete && callbacks.complete()
                    resolve()
                  },
                  error(e: Error) {
                    callbacks.error && callbacks.error(e)
                    resolve()
                  },
                }
              )
            )
            if (callbacks.useCancellable) {
              expect(callbacks.useCancellable.callCount).equals(1)
              const cancellable = callbacks.useCancellable.args[0][0]
              cancellable.cancel()
              expect(cancellable.isCancelled()).is.equal(true)
            }
            const isError = url === 'error' || status !== 200
            expect(callbacks.responseStarted.callCount).equals(
              url === 'error' ? 0 : 1
            )
            expect(callbacks.complete.callCount).equals(isError ? 0 : 1)
            expect(callbacks.error.callCount).equals(isError ? 1 : 0)
            expect(callbacks.next.callCount).equals(
              isError ? 0 : Array.isArray(body) ? body.length : 1
            )
            if (!isError) {
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
  })
})
