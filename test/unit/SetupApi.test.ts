import nock from 'nock'
import {expect} from 'chai'
import {InfluxDB} from '../../src'

const org = `my-org`
const url = 'http://localhost:9999'
const username = 'my-user'
const password = 'my-password'
const bucket = 'my-bucket'
const token = 'my-token'

describe('SetupApi', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  it('isOnboarding', async () => {
    nock(url)
      .get('/api/v2/setup')
      .reply(200, {allowed: false})
      .persist()
    const subject = new InfluxDB(url).getSetupApi()
    const val = await subject.isOnboarding()
    expect(val).equals(false)
  })
  it('setup', async () => {
    nock(url)
      .post('/api/v2/setup')
      .reply(200, {data: true})
      .persist()
    const subject = new InfluxDB(url).getSetupApi()
    const val = await subject.setup({org, username, password, bucket})
    expect(val).exist
    const val2 = await subject.setup({org, username, password, bucket}, token)
    expect(val2).exist
  })
})
