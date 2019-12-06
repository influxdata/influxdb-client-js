import {expect} from 'chai'
import nock from 'nock' // WARN: nock must be imported before NodeHttpTransport, since it modifies node's http
import NodeHttpTransport from '../../../src/client/impl/NodeHttpTransport'
import {ClientOptions, WritePrecission} from '../../../src'
import WriteApiImpl from '../../../src/client/impl/WriteApiImpl'
import {collectLogging, CollectedLogs} from '../../util'

const clientOptions: ClientOptions = {
  url: 'http://localhost',
  token: 'a',
}
const transport = new NodeHttpTransport(clientOptions)
const ORG = 'org'
const BUCKET = 'bucket'
const PRECISSION = WritePrecission.s

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
      logs = collectLogging.before()
    })
    afterEach(async () => {
      subject.close()
      collectLogging.after()
    })
    it('fails on flush without server connection', async () => {
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
    it('can be closed and flushed without any data', async () => {
      await subject.close().catch(e => expect.fail('should not happen', e))
      await subject.flush().catch(e => expect.fail('should not happen', e))
    })
  })
})
