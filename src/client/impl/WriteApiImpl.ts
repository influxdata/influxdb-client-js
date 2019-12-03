import WriteApi from '../WriteApi'
import {WritePrecission, ConnectionOptions} from '..'
import {NodeHttpTransport} from './NodeHttpTransport'

export default class WriteApiImpl implements WriteApi {
  private transport: NodeHttpTransport
  private httpPath: string

  constructor(
    connectionOptions: ConnectionOptions,
    org: string,
    bucket: string,
    precision: WritePrecission
  ) {
    this.transport = new NodeHttpTransport(connectionOptions)
    this.httpPath = `/write?org=${org}&bucket=${bucket}&precision=${precision}`
  }

  writeRecord(record: string): void {
    this.transport.send(this.httpPath, {}, record)
  }
  writeRecords(records: string[]): void {
    this.transport.send(this.httpPath, {}, records.join('\n'))
  }
}
