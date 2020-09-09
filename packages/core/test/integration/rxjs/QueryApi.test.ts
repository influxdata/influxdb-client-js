import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import {InfluxDB, ClientOptions, FluxTableMetaData} from '../../../src'
import fs from 'fs'
import simpleResponseLines from '../../fixture/query/simpleResponseLines.json'
import zlib from 'zlib'
import {from, concat, of} from 'rxjs'
import {toArray, groupBy, flatMap, map} from 'rxjs/operators'

const ORG = `my-org`
const QUERY_PATH = `/api/v2/query?org=${ORG}`

const clientOptions: ClientOptions = {
  url: 'http://fake:9999',
  token: 'a',
}

describe('RxJS QueryApi integration', () => {
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

    const lines = await from(
      subject.lines('from(bucket:"my-bucket") |> range(start: 0)')
    )
      .pipe(toArray())
      .toPromise()

    expect(lines).to.deep.equal(simpleResponseLines)
  })
  it('receives error', async () => {
    const subject = new InfluxDB(clientOptions).getQueryApi(ORG).with({})
    nock(clientOptions.url)
      .post(QUERY_PATH)
      .reply((_uri, _requestBody) => {
        return [500, 'Error', {}]
      })
      .persist()

    await from(subject.rows('from(bucket:"my-bucket") |> range(start: 0)'))
      .pipe(toArray())
      .toPromise()
      .then(
        () => expect.fail('Server returned 500!'),
        () => true // failure is expected
      )
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

      const [tables, rows] = await from(
        subject.rows('from(bucket:"my-bucket") |> range(start: 0)')
      )
        .pipe(
          groupBy(({tableMeta}) => tableMeta),
          flatMap(group =>
            concat(of(group.key), group.pipe(map(({values}) => values)))
          ),
          map((data, index) =>
            data instanceof FluxTableMetaData
              ? {index, meta: data}
              : {index, row: data}
          ),
          groupBy(value => 'meta' in value),
          flatMap(group => group.pipe(toArray())),
          toArray()
        )
        .toPromise()

      const response = JSON.parse(
        fs.readFileSync(`test/fixture/query/${name}.parsed.json`, 'utf8')
      )
      expect(tables).to.deep.equal(response.tables)
      expect(rows).to.deep.equal(response.rows)
    })
  })
})
