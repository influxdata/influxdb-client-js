import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import {InfluxDB} from '@influxdata/influxdb-client'
import {FluxScriptInvocationAPI} from '../../../src/custom/FluxScriptInvocationAPI'
import {Readable} from 'stream'
import zlib from 'zlib'

const fakeUrl = 'http://fake:8086'
const fakeToken = 'a'
const fakeResponseLines = [
  ',result,table,_time,_value',
  ',_result,0,2021-01-01T00:00:00Z,2',
  ',_result,0,2021-01-01T02:24:00Z,6',
]
const fakeResponse = fakeResponseLines.join('\n')
const fakeScriptID = 'TEST_SCRIPT_ID'
const influxDB = new InfluxDB({url: fakeUrl, token: fakeToken})

describe('FluxScriptInvocationAPI', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  it('receives lines', async () => {
    const subject = new FluxScriptInvocationAPI(influxDB)
    let body, authorization: any
    nock(fakeUrl)
      .post(`/api/v2/scripts/${fakeScriptID}/invoke`)
      .reply(function (_uri, requestBody) {
        body = requestBody
        authorization = this.req.headers.authorization
        return [200, fakeResponse]
      })
      .persist()
    const lines = await subject.invoke(fakeScriptID, {hi: 'Bob'}).collectLines()
    expect(lines).to.deep.equal(fakeResponseLines)
    expect(body).to.deep.equal({params: {hi: 'Bob'}})
    expect(authorization).equals(`Token ${fakeToken}`)
  })
  it('can provide custom headers', async () => {
    const subject = new FluxScriptInvocationAPI(influxDB, {
      headers: {whatever: 'it is'},
    })
    let customHeader: any
    nock(fakeUrl)
      .post(`/api/v2/scripts/${fakeScriptID}/invoke`)
      .reply(function (_uri) {
        customHeader = this.req.headers.whatever
        return [200, fakeResponse, {'content-type': 'text/csv'}]
      })
      .persist()
    const lines = await subject.invoke(fakeScriptID).collectLines()
    expect(lines).to.deep.equal(fakeResponseLines)
    expect(customHeader).equals('it is')
  })
  it('can request gzip encoding', async () => {
    const subject = new FluxScriptInvocationAPI(influxDB, {
      gzip: true,
    })
    let acceptEncoding: any
    nock(fakeUrl)
      .post(`/api/v2/scripts/${fakeScriptID}/invoke`)
      .reply(function (_uri) {
        acceptEncoding = this.req.headers['accept-encoding']
        return [
          200,
          Readable.from([Buffer.from(fakeResponse)]).pipe(zlib.createGzip()),
          {'content-encoding': 'gzip', 'content-type': 'text/csv'},
        ]
      })
      .persist()
    const lines = await subject.invoke(fakeScriptID).collectLines()
    expect(lines).to.deep.equal(fakeResponseLines)
    expect(acceptEncoding).equals('gzip')
  })
})
