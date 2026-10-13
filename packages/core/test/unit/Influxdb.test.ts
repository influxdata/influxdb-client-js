import {expect} from 'chai'
import {ClientOptions, InfluxDB, Transport} from '../../src'
import {
  clientCert,
  clientKey,
  clientP12,
  otherServerCert,
  otherServerKey,
  otherServerP12,
  p12Password,
  serverCert,
  serverKey,
  serverP12,
  startHttpsServer,
  stopHttpsServer,
} from '../util'
import https from 'https'
import fs from 'fs'

describe('InfluxDB', () => {
  describe('constructor', () => {
    it('is created from string url', () => {
      expect(
        (new InfluxDB('http://localhost:8086') as any)._options
      ).to.deep.equal({
        url: 'http://localhost:8086',
      })
    })
    it('is created from configuration with url', () => {
      expect(
        (new InfluxDB({url: 'http://localhost:8086'}) as any)._options
      ).to.deep.equal({
        url: 'http://localhost:8086',
      })
    })
    it('is created from configuration with url and token', () => {
      expect(
        (
          new InfluxDB({
            url: 'https://localhost:8086?token=a',
            token: 'b',
          }) as any
        )._options
      ).to.deep.equal({
        url: 'https://localhost:8086?token=a',
      })
    })
    it('is created from string url with trailing slash', () => {
      expect(
        (new InfluxDB('http://localhost:8086/') as any)._options
      ).to.deep.equal({
        url: 'http://localhost:8086',
      })
    })
    it('is created from configuration with url with trailing slash', () => {
      expect(
        (new InfluxDB({url: 'http://localhost:8086/'}) as any)._options
      ).to.deep.equal({
        url: 'http://localhost:8086',
      })
    })
    it('fails on null arg', () => {
      expect(() => new InfluxDB(null as unknown as ClientOptions)).to.throw(
        'No url or configuration specified!'
      )
    })
    it('fails on undefined arg', () => {
      expect(
        () => new InfluxDB(undefined as unknown as ClientOptions)
      ).to.throw('No url or configuration specified!')
    })
    it('fails on missing url', () => {
      expect(() => new InfluxDB({} as ClientOptions as ClientOptions)).to.throw(
        'No url specified!'
      )
    })
    it('fails on unsupported protocol', () => {
      expect(
        () =>
          new InfluxDB({
            url: 'ws://localhost:8086?token=b',
          })
      ).to.throw('Unsupported')
    })
    it('creates instance with transport initialized', () => {
      expect(
        new InfluxDB({
          url: 'http://localhost:8086',
        })
      ).has.property('transport')
      expect(
        new InfluxDB({
          url: 'http://localhost:8086',
          transport: null,
        } as any as ClientOptions)
      ).has.property('transport')
      expect(
        new InfluxDB({
          url: 'http://localhost:8086',
          transport: {} as Transport,
        } as any as ClientOptions)
      ).has.property('transport')
    })
    it('creates instance with follow-redirects', () => {
      const request = (): void => {}
      const followRedirects = {
        https: {request},
      }
      expect(
        new InfluxDB({
          url: 'https://localhost:8086',
          transportOptions: {
            'follow-redirects': followRedirects,
          },
        })
      )
        .has.property('transport')
        .has.property('requestApi')
        .is.equal(request)
    })
  })
  describe('apis', () => {
    const influxDb = new InfluxDB('http://localhost:8086?token=a')
    it('serves queryApi writeApi without a pending schedule', () => {
      expect(influxDb.getWriteApi('org', 'bucket')).to.be.ok
      expect(influxDb.getWriteApi('org', 'bucket', 's')).to.be.ok
    })
    it('serves queryApi', () => {
      expect(influxDb.getQueryApi('my-org') as any)
        .property('options')
        .to.deep.equals({org: 'my-org'})
    })
  })
  describe('test tls', () => {
    interface TlsTestCase {
      name: string
      server: {
        cert?: string
        key?: string
        pfx?: string
        passphrase?: string
      }
      client: {
        ca?: string
      }
      isSuccess: boolean
    }

    const tests: TlsTestCase[] = [
      {
        name: 'client with correct server certificate',
        server: {
          cert: serverCert,
          key: serverKey,
        },
        client: {
          ca: serverCert,
        },
        isSuccess: true,
      },
      {
        name: 'client with correct server certificate (.p12)',
        server: {
          pfx: serverP12,
          passphrase: p12Password,
        },
        client: {
          ca: serverCert,
        },
        isSuccess: true,
      },
      {
        name: 'client with incorrect server certificate',
        server: {
          cert: serverCert,
          key: serverKey,
        },
        client: {
          ca: otherServerCert,
        },
        isSuccess: false,
      },
      {
        name: 'client with incorrect server certificate (.p12)',
        server: {
          pfx: serverP12,
          passphrase: p12Password,
        },
        client: {
          ca: otherServerCert,
        },
        isSuccess: false,
      },
    ]

    async function verifyTlsRequest(
      port: number,
      caPath?: string,
      shouldSucceed = true
    ): Promise<void> {
      const transportOptions: Record<string, any> = {}
      if (caPath) {
        transportOptions.ca = fs.readFileSync(caPath)
      }

      const influxDB = new InfluxDB({
        url: `https://localhost:${port}`,
        timeout: 10000,
        transportOptions,
      })

      const sendRequest = () =>
        influxDB.transport.request('/', '', {
          method: 'GET',
          headers: {'content-type': 'application/json'},
        })

      if (shouldSucceed) {
        const data = await sendRequest()
        expect(data?.toString()).equals('Success')
      } else {
        try {
          await sendRequest()
          expect.fail('exception shall be thrown')
        } catch (e: any) {
          expect(e).to.be.an('error')
          expect(e.message).to.include('certificate')
        }
      }
    }

    for (const test of tests) {
      it(`tls - ${test.name}`, async () => {
        let server: https.Server | undefined
        try {
          const serverOptions: https.ServerOptions = {
            ...(test.server.cert && {cert: fs.readFileSync(test.server.cert)}),
            ...(test.server.key && {key: fs.readFileSync(test.server.key)}),
            ...(test.server.pfx && {pfx: fs.readFileSync(test.server.pfx)}),
            ...(test.server.passphrase && {
              passphrase: test.server.passphrase,
            }),
          }
          const runningServer = await startHttpsServer(serverOptions)
          server = runningServer.server

          await verifyTlsRequest(
            runningServer.port,
            test.client.ca,
            test.isSuccess
          )
        } finally {
          await stopHttpsServer(server)
        }
      })
    }
  })
  describe('test mtls', () => {
    interface MtlsTestCase {
      name: string
      server: {
        ca: string
        cert?: string
        key?: string
        pfx?: string
        passphrase?: string
      }
      client: {
        ca: string
        cert?: string
        key?: string
        pfx?: string
        passphrase?: string
      }
      isSuccess: boolean
    }

    const tests: MtlsTestCase[] = [
      {
        name: 'client and server with correct certificates',
        server: {
          ca: clientCert,
          cert: serverCert,
          key: serverKey,
        },
        client: {
          ca: serverCert,
          cert: clientCert,
          key: clientKey,
        },
        isSuccess: true,
      },
      {
        name: 'client and server with correct certificates (.p12)',
        server: {
          ca: clientCert,
          pfx: serverP12,
          passphrase: p12Password,
        },
        client: {
          ca: serverCert,
          pfx: clientP12,
          passphrase: p12Password,
        },
        isSuccess: true,
      },
      {
        name: 'client send incorrect certificate',
        server: {
          ca: clientCert,
          cert: serverCert,
          key: serverKey,
        },
        client: {
          ca: serverCert,
          cert: otherServerCert,
          key: otherServerKey,
        },
        isSuccess: false,
      },
      {
        name: 'client send incorrect certificate (.p12)',
        server: {
          ca: clientCert,
          pfx: serverP12,
          passphrase: p12Password,
        },
        client: {
          ca: serverCert,
          pfx: otherServerP12,
          passphrase: p12Password,
        },
        isSuccess: false,
      },
    ]
    for (const test of tests) {
      it(`mtls - ${test.name}`, async () => {
        let server: https.Server | undefined
        try {
          const runningServer = await startHttpsServer({
            ca: fs.readFileSync(test.server.ca),
            ...(test.server.cert && {cert: fs.readFileSync(test.server.cert)}),
            ...(test.server.key && {key: fs.readFileSync(test.server.key)}),
            ...(test.server.pfx && {pfx: fs.readFileSync(test.server.pfx)}),
            ...(test.server.passphrase && {
              passphrase: test.server.passphrase,
            }),
            rejectUnauthorized: true,
            requestCert: true,
          })
          server = runningServer.server

          const influxDB = new InfluxDB({
            url: `https://localhost:${runningServer.port}`,
            timeout: 10000,
            transportOptions: {
              ca: fs.readFileSync(test.client.ca),
              ...(test.client.cert && {
                cert: fs.readFileSync(test.client.cert),
              }),
              ...(test.client.key && {key: fs.readFileSync(test.client.key)}),
              ...(test.client.pfx && {pfx: fs.readFileSync(test.client.pfx)}),
              ...(test.client.passphrase && {
                passphrase: test.client.passphrase,
              }),
            },
          })

          if (test.isSuccess) {
            const data = await influxDB.transport.request('/', '', {
              method: 'GET',
              headers: {'content-type': 'application/json'},
            })
            expect(data?.toString()).equals('Success')
          } else {
            try {
              await influxDB.transport.request('/', '', {
                method: 'GET',
                headers: {'content-type': 'application/json'},
              })
              expect.fail('exception shall be thrown')
            } catch (e: any) {
              expect(e).to.be.an('error')
              expect(e.code).equals('ECONNRESET')
            }
          }
        } finally {
          await stopHttpsServer(server)
        }
      })
    }
  })
})
