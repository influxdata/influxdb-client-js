import {expect} from 'chai'
import {InfluxDB, ClientOptions, WritePrecision} from '../../src'

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
        (new InfluxDB({
          url: 'https://localhost:8086?token=a',
          token: 'b',
        }) as any)._options
      ).to.deep.equal({
        url: 'https://localhost:8086?token=a',
        token: 'b',
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
      expect(() => new InfluxDB((null as unknown) as ClientOptions)).to.throw(
        'No url or configuration specified!'
      )
    })
    it('fails on undefined arg', () => {
      expect(
        () => new InfluxDB((undefined as unknown) as ClientOptions)
      ).to.throw('No url or configuration specified!')
    })
    it('fails on missing url', () => {
      expect(
        () => new InfluxDB(({} as ClientOptions) as ClientOptions)
      ).to.throw('No url specified!')
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
        new InfluxDB(({
          url: 'http://localhost:8086',
          transport: null,
        } as any) as ClientOptions)
      ).has.property('transport')
      expect(
        new InfluxDB(({
          url: 'http://localhost:8086',
          transport: {} as Transport,
        } as any) as ClientOptions)
      ).has.property('transport')
    })
  })
  describe('apis', () => {
    const influxDb = new InfluxDB('http://localhost:8086?token=a')
    it('serves queryApi writeApi without a pending schedule', () => {
      expect(influxDb.getWriteApi('org', 'bucket')).to.be.ok
      expect(influxDb.getWriteApi('org', 'bucket', WritePrecision.s)).to.be.ok
      expect(influxDb.getWriteApi('org', 'bucket', 's')).to.be.ok
    })
    it('serves queryApi', () => {
      expect(influxDb.getQueryApi('my-org') as any)
        .property('options')
        .to.deep.equals({org: 'my-org'})
    })
  })
})
