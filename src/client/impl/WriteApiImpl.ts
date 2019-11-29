import WriteApi from '../WriteApi'
import {WritePrecission, ConnectionOptions} from '..'
import {NodeHttpTransport} from './NodeHttpTransport'

export default class WriteApiImpl implements WriteApi {
  private transport: NodeHttpTransport

  constructor(connectionOptions: ConnectionOptions) {
    this.transport = new NodeHttpTransport(connectionOptions)
  }

  writeRecord(
    record: string,
    precision?: WritePrecission,
    bucket?: string,
    org?: string
  ): void {
    // TODO make it better
    this.transport.send(
      `/write?org=${org}&bucket=${bucket}&precision=${precision}`,
      {},
      record
    )
  }
  // writeRecords(
  //   records: string[],
  //   precision?: WritePrecission,
  //   bucket?: string,
  //   org?: string
  // ): void {
  //   throw new Error('Method not implemented.')
  // }
}
