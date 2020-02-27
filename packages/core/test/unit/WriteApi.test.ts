import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import {
  ClientOptions,
  WritePrecision,
  WriteOptions,
  Point,
  WriteApi,
  InfluxDB,
} from '../../src'
import {collectLogging, CollectedLogs} from '../util'

const clientOptions: ClientOptions = {
  url: 'http://fake:9999',
  token: 'a',
}
const ORG = 'org'
const BUCKET = 'bucket'
const PRECISION = WritePrecision.s

const WRITE_PATH_NS = `/api/v2/write?org=${ORG}&bucket=${BUCKET}&precision=ns`

function createApi(
  org: string,
  bucket: string,
  precision: WritePrecision,
  options: Partial<WriteOptions>
): WriteApi {
  return new InfluxDB({
    ...clientOptions,
    ...{writeOptions: options},
  }).getWriteApi(org, bucket, precision)
}

describe('WriteApi', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  describe('simple', () => {
    let subject: WriteApi
    let logs: CollectedLogs
    beforeEach(() => {
      subject = createApi(ORG, BUCKET, PRECISION, {
        retryJitter: 0,
      })
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      await subject.close()
      collectLogging.after()
    })
    it('can be closed and flushed without any data', async () => {
      await subject.close().catch(e => expect.fail('should not happen', e))
      await subject.flush().catch(e => expect.fail('should not happen', e))
    })
    it('fails on close without server connection', async () => {
      subject.writeRecord('test value=1')
      subject.writeRecords(['test value=2', 'test value=3'])
      await subject
        .close()
        .then(() => expect.fail('failure expected'))
        .catch(e => {
          expect(logs.error).length.greaterThan(0)
          expect(e).to.be.ok
        })
    })
    it('fails on flush without server connection', async () => {
      subject.writeRecord('test value=1')
      subject.writeRecords(['test value=2', 'test value=3'])
      await subject
        .flush()
        .then(() => expect.fail('failure expected'))
        .catch(e => {
          expect([...logs.error, ...logs.warn]).to.length(1)
          expect(e).to.be.ok
        })
    })
  })
  describe('configuration', () => {
    let subject: WriteApi
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = createApi(ORG, BUCKET, PRECISION, {
        retryJitter: 0,
        ...writeOptions,
      })
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      await subject.close()
      collectLogging.after()
    })
    it('flushes the data in specified batchSize', async () => {
      useSubject({
        flushInterval: 0,
        batchSize: 1,
        maxRetries: 2,
      })
      subject.writeRecord('test value=1')
      subject.writeRecords(['test value=2', 'test value=3'])
      // wait for http calls to finish
      await new Promise(resolve => setTimeout(resolve, 10))
      await subject.close().then(() => {
        expect(logs.error).to.length(1)
        expect(logs.warn).length(3) // 3 warnings about write failure
        expect(logs.error[0][0]).includes(
          '3',
          'Warning message informs about count of missing lines'
        )
      })
    })
    it('does not retry write when configured to do so', async () => {
      useSubject({maxRetries: 0, batchSize: 1})
      subject.writeRecord('test value=1')
      await subject.close().then(() => {
        expect(logs.error).to.length(1)
        expect(logs.warn).is.deep.equal([])
      })
    })
    it('uses the pre-configured batchSize', async () => {
      useSubject({flushInterval: 0, maxRetries: 0, batchSize: 2})
      subject.writeRecords(['test value=1', 'test value=2', 'test value=3'])
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for HTTP to finish
      subject.dispose()
      expect(logs.error).to.length(1)
      expect(logs.warn).to.length(0)
    })
  })
  describe('flush on background', () => {
    let subject: WriteApi
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = createApi(ORG, BUCKET, PRECISION, {
        retryJitter: 0,
        ...writeOptions,
      })
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      await subject.close()
      collectLogging.after()
    })
    it('flushes the records automatically', async () => {
      useSubject({flushInterval: 5, maxRetries: 0, batchSize: 10})
      subject.writeRecord('test value=1')
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(1)
      subject.writeRecord('test value=2')
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(2)
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush
      await subject.flush().then(() => {
        expect(logs.error).to.length(2)
      })
    })
  })
  describe('usage of server API', () => {
    let subject: WriteApi
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = createApi(ORG, BUCKET, WritePrecision.ns, {
        retryJitter: 0,

        ...writeOptions,
      }).useDefaultTags({xtra: '1'})
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      subject.close()
      collectLogging.after()
    })
    it('flushes the records without errors', async () => {
      useSubject({flushInterval: 5, maxRetries: 1, batchSize: 10})
      let requests = 0
      const messages: string[] = []
      nock(clientOptions.url)
        .post(WRITE_PATH_NS)
        .reply((_uri, _requestBody) => {
          requests++
          if (requests % 2) {
            return [429, '', {'retry-after': '1'}]
          } else {
            messages.push(_requestBody.toString())
            return [200, '', {'retry-after': '1'}]
          }
        })
        .persist()
      subject.writePoint(
        new Point('test')
          .tag('t', ' ')
          .floatField('value', 1)
          .timestamp('')
      )
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(1)
      subject.writePoints([
        new Point('test'), // will be ignored
        new Point('test').floatField('value', 2),
        new Point('test').floatField('value', 3),
        new Point('test').floatField('value', 4).timestamp('1'),
      ])
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(2)
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(2)
      expect(messages).to.have.length(2)
      expect(messages[0]).to.equal('test,t=\\ ,xtra=1 value=1')
      const lines = messages[1].split('\n')
      expect(lines).has.length(3)
      expect(lines[0]).to.satisfy((line: string) =>
        line.startsWith('test,xtra=1 value=2')
      )
      expect(lines[0].substring(lines[0].lastIndexOf(' ') + 1)).to.have.length(
        String(Date.now()).length + 6 // nanosecond precision
      )
      expect(lines[1]).to.satisfy((line: string) =>
        line.startsWith('test,xtra=1 value=3')
      )
      expect(lines[0].substring(lines[0].lastIndexOf(' ') + 1)).to.have.length(
        String(Date.now()).length + 6 // nanosecond precision
      )
      expect(lines[2]).to.be.equal('test,xtra=1 value=4 1')
      lines.forEach(_line => {})
      await subject.flush().then(() => {
        expect(logs.error).to.length(0)
      })
    })
  })
})
