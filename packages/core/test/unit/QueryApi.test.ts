/* eslint-disable @typescript-eslint/camelcase */
import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import {InfluxDB, ClientOptions, FluxTableMetaData} from '../../src'
import fs from 'fs'
import {CollectLinesObserver} from './util/CollectLinesObserver'
import {CollectTablesObserver} from './util/CollectTablesObserver'
import simpleResponseLines from '../fixture/query/simpleResponseLines.json'
import zlib from 'zlib'

const ORG = `my-org`
const QUERY_PATH = `/api/v2/query?org=${ORG}`

const clientOptions: ClientOptions = {
  url: 'http://fake:9999',
  token: 'a',
}

describe('QueryApi', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  it('receives raw lines', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    const target = new CollectLinesObserver()
    await new Promise((resolve, reject) =>
      subject.queryLines(
        'from(bucket:"my-bucket") |> range(start: 0)',
        target.attach(resolve, reject)
      )
    )
    expect(target.completed).to.equals(1)
    expect(target.lines).to.deep.equal(simpleResponseLines)
  })
  ;[
    ['response2', undefined],
    ['response2', true],
    ['response3', false],
  ].forEach(([name, gzip]) => {
    it(`receives tables from ${name} with gzip=${gzip}`, async () => {
      const subject = new InfluxDB(clientOptions)
        .getQueryApi(ORG)
        .with({gzip: gzip as boolean | undefined})
      nock(clientOptions.url)
        .post(QUERY_PATH)
        .reply((_uri, _requestBody) => {
          let stream: any = fs.createReadStream(
            `test/fixture/query/${name}.txt`
          )
          if (gzip) stream = stream.pipe(zlib.createGzip())
          return [200, stream, {'content-encoding': gzip ? 'gzip' : 'identity'}]
        })
        .persist()
      const target = new CollectTablesObserver()
      await new Promise((resolve, reject) =>
        subject.queryRows(
          'from(bucket:"my-bucket") |> range(start: 0)',
          target.attach(resolve, reject)
        )
      )
      const response = JSON.parse(
        fs.readFileSync(`test/fixture/query/${name}.parsed.json`, 'utf8')
      )
      expect(target.completed).to.equals(1)
      // console.log(JSON.stringify({tables: target.tables, rows: target.rows}))
      expect(target.tables).to.deep.equal(response.tables)
      expect(target.rows).to.deep.equal(response.rows)
    })
  })
  it('receives properly indexed table data', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          `,result,table,_start,_stop,_time,_value,_field,_measurement,location
,,0,1970-01-01T00:00:00Z,2019-12-12T09:05:37.96237406Z,1970-01-01T00:26:15.995033574Z,55,value,temperature,west
,,0,1970-01-01T00:00:00Z,2019-12-12T09:05:37.96237406Z,1970-01-01T00:26:16.063594313Z,55,value,temperature,west
,,0,1970-01-01T00:00:00Z,2019-12-12T09:05:37.96237406Z,1970-01-01T00:26:16.069518557Z,55,value,temperature,west`,
          {'retry-after': '1'},
        ]
      })
      .persist()
    const values: Array<string> = []
    await new Promise((resolve, reject) =>
      subject.queryRows('from(bucket:"my-bucket") |> range(start: 0)', {
        next(row: string[], meta: FluxTableMetaData): void {
          values.push(row[meta.column('_value').index])
        },

        error(error: Error): void {
          reject(error)
        },
        complete(): void {
          resolve()
        },
      })
    )
    expect(values).to.deep.equal(['55', '55', '55'])
  })
  it('processes quoted lines properly influxdata/influxdb-client-js#179', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          `#group,false,false,true,false,false,true
#datatype,string,long,string,double,string,string
#default,_result,,,,,
,result,table,id,st_length,st_linestring,trip_id
,,0,GO506_20_6431,25.463641400535032,"-73.68691 40.820317, -73.690054 40.815413",GO506_20_6431
,,1,GO506_20_6431,25.463641400535032,"-73.68691 40.820317, -73.690054 40.815413",GO506_20_6431`,
          {'retry-after': '1'},
        ]
      })
      .persist()
    const values: Array<any> = []
    await new Promise((resolve, reject) =>
      subject.queryRows('from(bucket:"my-bucket") |> range(start: 0)', {
        next(row: string[], meta: FluxTableMetaData): void {
          values.push(meta.toObject(row))
        },

        error(error: Error): void {
          reject(error)
        },
        complete(): void {
          resolve()
        },
      })
    )
    expect(values).to.deep.equal([
      {
        result: '_result',
        table: '0',
        id: 'GO506_20_6431',
        st_length: 25.463641400535032,
        st_linestring: '-73.68691 40.820317, -73.690054 40.815413',
        trip_id: 'GO506_20_6431',
      },
      {
        result: '_result',
        table: '1',
        id: 'GO506_20_6431',
        st_length: 25.463641400535032,
        st_linestring: '-73.68691 40.820317, -73.690054 40.815413',
        trip_id: 'GO506_20_6431',
      },
    ])
  })
  it('sends custom now and type', async () => {
    let body: any
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, requestBody) => {
        body = requestBody
        return [200, '', {}]
      })
      .persist()

    const query = 'from(bucket:"my-bucket") |> range(start: 0)'
    const tests: Record<string, string | undefined>[] = [
      {
        now: undefined,
        type: undefined,
      },
      {
        now: '2020-10-05T14:48:00.000Z',
        type: 'whatever',
      },
    ]
    for (const pair of tests) {
      let subject = new InfluxDB(clientOptions).getQueryApi(ORG)
      if (pair.now) {
        subject = subject.with({now: () => pair.now as string})
      }
      if (pair.type) {
        subject = subject.with({type: pair.type as any})
      }
      await new Promise((resolve, reject) =>
        subject.queryRows(query, {
          next(_row: string[], _meta: FluxTableMetaData): void {},
          error(error: Error): void {
            reject(error)
          },
          complete(): void {
            resolve()
          },
        })
      )
      expect(body?.type).to.deep.equal(pair.type || 'flux')
      expect(body?.query).to.deep.equal(query)
      expect(body?.now).to.deep.equal(pair.now)
    }
  })
  it('collectLines collects raw lines', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    const data = await subject.collectLines(
      'from(bucket:"my-bucket") |> range(start: 0)'
    )
    expect(data).to.deep.equal(simpleResponseLines)
  })
  it('collectLines fails on server error', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          500,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    try {
      await subject.collectLines('from(bucket:"my-bucket") |> range(start: 0)')
      expect.fail('client error expected on server error')
    } catch (e) {
      // OK error is expected
    }
  })
  it('collectRows collects rows', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    const data = await subject.collectRows(
      'from(bucket:"my-bucket") |> range(start: 0)'
    )
    expect(data.length).equals(5)
    expect(data).to.be.an('array')
    expect(data[1]).to.be.an('object')
  })
  it('collectRows can collect every second row as string', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          200,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    let i = 0
    const data = await subject.collectRows(
      'from(bucket:"my-bucket") |> range(start: 0)',
      () => (i++ % 2 === 1 ? undefined : String(i))
    )
    expect(data.length).equals(3)
    expect(data).to.be.an('array')
    expect(data[2]).equals('5')
  })
  it('collectRows fails on server error', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [
          500,
          fs.createReadStream('test/fixture/query/simpleResponse.txt'),
          {'retry-after': '1'},
        ]
      })
      .persist()
    try {
      await subject.collectRows('from(bucket:"my-bucket") |> range(start: 0)')
      expect.fail('client error expected on server error')
    } catch (e) {
      // OK error is expected
    }
  })
})
