import WriteApi from '../WriteApi'
import {WritePrecission} from '../options'
import {Transport} from '../transport'

export default class WriteApiImpl implements WriteApi {
  private httpPath: string

  constructor(
    private transport: Transport,
    org: string,
    bucket: string,
    precision: WritePrecission
  ) {
    this.httpPath = `/write?org=${org}&bucket=${bucket}&precision=${precision}`
    // TODO buffer, flush, close
  }

  writeRecord(record: string): void {
    this.transport.send(this.httpPath, {}, 'POST', record)
  }
  writeRecords(records: string[]): void {
    this.transport.send(this.httpPath, {}, 'POST', records.join('\n'))
  }
}
