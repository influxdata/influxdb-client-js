import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import NodeHttpTransport from '../../../src/impl/NodeHttpTransport'
import {
  ClientOptions,
  WritePrecission,
  DEFAULT_WriteOptions,
  WriteOptions,
} from '../../../src'
import WriteApiImpl from '../../../src/impl/WriteApiImpl'
import {collectLogging, CollectedLogs} from '../../util'

const clientOptions: ClientOptions = {
  url: 'http://fake:9999',
  token: 'a',
  retryJitter: 0, // minimum delay for tests
}
const transport = new NodeHttpTransport(clientOptions)
const ORG = 'org'
const BUCKET = 'bucket'
const PRECISSION = WritePrecission.s

const WRITE_PATH = `/write?org=${ORG}&bucket=${BUCKET}&precission=${PRECISSION}`

describe('WriteApiImpl', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  describe('simple', () => {
    let subject: WriteApiImpl
    let logs: CollectedLogs
    beforeEach(() => {
      subject = new WriteApiImpl(
        transport,
        ORG,
        BUCKET,
        PRECISSION,
        clientOptions
      )
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      subject.close()
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
          expect(logs.error).to.length(1)
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
          expect(logs.error).to.length(1)
          expect(logs.warn).to.length(DEFAULT_WriteOptions.maxRetries)
          expect(e).to.be.ok
        })
    })
  })
  describe('configuration', () => {
    let subject: WriteApiImpl
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = new WriteApiImpl(transport, ORG, BUCKET, PRECISSION, {
        ...clientOptions,
        writeOptions,
      })
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      subject.close()
      collectLogging.after()
    })
    it('flushes the response in specified batchSize', async () => {
      useSubject({flushInterval: 0, batchSize: 1})
      subject.writeRecord('test value=1')
      subject.writeRecords(['test value=2', 'test value=3'])
      // wait for http calls to finish
      await new Promise(resolve => setTimeout(resolve, 10))
      await subject.close().then(() => {
        expect(logs.error).to.length(3)
        expect(logs.warn).to.length(3 * DEFAULT_WriteOptions.maxRetries)
      })
    })
    it('does not retry write when configured to do so', async () => {
      useSubject({maxRetries: 0, batchSize: 1})
      subject.writeRecord('test value=1')
      await subject.close().then(() => {
        expect(logs.error).to.length(1)
        expect(logs.warn).to.length(0)
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
    let subject: WriteApiImpl
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = new WriteApiImpl(transport, ORG, BUCKET, PRECISSION, {
        ...clientOptions,
        writeOptions,
      })
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      subject.close()
      collectLogging.after()
    })
    it('flushes the response automatically', async () => {
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
    let subject: WriteApiImpl
    let logs: CollectedLogs
    function useSubject(writeOptions: Partial<WriteOptions>): void {
      subject = new WriteApiImpl(transport, ORG, BUCKET, PRECISSION, {
        ...clientOptions,
        writeOptions,
      })
    }
    beforeEach(() => {
      // logs = collectLogging.decorate()
      logs = collectLogging.replace()
    })
    afterEach(async () => {
      subject.close()
      collectLogging.after()
    })
    it('flushes the response without errors', async () => {
      useSubject({flushInterval: 5, maxRetries: 1, batchSize: 10})
      let requests = 0
      nock(clientOptions.url)
        .post(WRITE_PATH)
        .reply((_uri, _requestBody) => {
          requests++
          return [requests % 2 ? 429 : 200, 'yes', {'retry-after': '1'}]
        })
        .persist()
      subject.writeRecord('test value=1')
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(1)
      subject.writeRecord('test value=2')
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush and HTTP to finish
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(2)
      await new Promise(resolve => setTimeout(resolve, 10)) // wait for background flush
      expect(logs.error).to.length(0)
      expect(logs.warn).to.length(2)
      await subject.flush().then(() => {
        expect(logs.error).to.length(0)
      })
    })
  })
})
