import {
  InfluxDB,
  Transport,
  AnnotatedCSVResponse,
  APIExecutor,
  CommunicationObserver,
} from '@influxdata/influxdb-client'

/** ExecutionOptions contains execution options for a flux script. */
export interface ExecutionOptions {
  /**
   * Requests gzip encoded response.
   */
  gzip?: boolean
  /**
   * HTTP headers that will be sent with every query request.
   */
  headers?: {[key: string]: string}
}

/**
 * FluxScriptInvocationAPI executes flux 'API invokable script' and parses the result CSV annotated data.
 * See https://docs.influxdata.com/influxdb/cloud/api-guide/api-invokable-scripts/ .
 */
export class FluxScriptInvocationAPI {
  // internal
  private transport: Transport
  private processCSVResponse: (supplier: APIExecutor) => AnnotatedCSVResponse
  private options: ExecutionOptions

  /**
   * Creates FluxScriptInvocationAPI with the supplied InfluxDB instance and a particular script identifier.
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   * @param options - script execution options
   */
  constructor(influxDB: InfluxDB, options?: ExecutionOptions) {
    this.transport = influxDB.transport
    this.processCSVResponse = influxDB.processCSVResponse
    this.options = {...options}
  }

  /**
   * Invoke returns a parsed response data stream that executes
   * the supplied script when asked for data.
   * @param scriptID - script identifier
   * @param params  - script parameters
   * @returns response with various methods to process data from the returned annotated
   * CSV response data stream
   */
  invoke(scriptID: string, params?: Record<string, any>): AnnotatedCSVResponse {
    return this.processCSVResponse(this.createExecutor(scriptID, params))
  }

  private createExecutor(
    scriptID: string,
    params: Record<string, any> | undefined
  ): APIExecutor {
    const {gzip, headers} = this.options

    return (consumer: CommunicationObserver<Uint8Array>): void => {
      this.transport.send(
        `/api/v2/scripts/${scriptID}/invoke`,
        JSON.stringify({
          params: {...params},
        }),
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; encoding=utf-8',
            'accept-encoding': gzip ? 'gzip' : 'identity',
            ...headers,
          },
        },
        consumer
      )
    }
  }
}
