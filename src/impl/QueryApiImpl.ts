import QueryApi, {QueryOptions} from '../QueryApi'
import {Transport, CommunicationObserver} from '../transport'
import ChunksToLines from './ChunksToLines'

const DEFAULT_dialect: any = {
  header: true,
  delimiter: ',',
  quoteChar: '"',
  commentPrefix: '#',
  annotations: ['datatype', 'group', 'default'],
}

export class QueryApiImpl implements QueryApi {
  private options: QueryOptions
  constructor(private transport: Transport, org: string) {
    this.options = {org}
  }

  with(options: Partial<QueryOptions>): QueryApi {
    this.options = {...this.options, ...options}
    return this
  }

  queryRaw(query: string, consumer: CommunicationObserver<string>): void {
    this.transport.send(
      `/api/v2/query?org=${encodeURIComponent(this.options.org)}`,
      JSON.stringify({
        query,
        dialect: DEFAULT_dialect,
        type: this.options.type,
      }),
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json; encoding=utf-8',
        },
      },
      new ChunksToLines(consumer)
    )
  }
}

export default QueryApiImpl
