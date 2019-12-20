import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import {InfluxDB, ClientOptions} from '../../src'
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
})
