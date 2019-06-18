import {Package, QueryApi} from '../api'
import {ServiceOptions, File} from '../types'
import {Deferred} from '../utils/Deferred'
import {CancellationError, LargeResponseError} from '../utils/errors'

interface ExecuteOptions {
  limitChars: number
  extern?: File
}

const EXECUTE_OPTIONS_DEFAULTS = {limitChars: Infinity}
const CHECK_LIMIT_INTERVAL = 500

export default class {
  private service: QueryApi
  private serviceOptions: ServiceOptions
  private basePath: string

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new QueryApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
    this.basePath = basePath
  }

  public async ast(query: string): Promise<Package | undefined> {
    const {data} = await this.service.postQueryAst(
      undefined,
      undefined,
      {
        query,
      },
      this.serviceOptions
    )

    return data.ast
  }

  public execute(
    orgID: string,
    query: string,
    options: ExecuteOptions = EXECUTE_OPTIONS_DEFAULTS
  ): {promise: Promise<string>; cancel: () => void} {
    // We're using `XMLHttpRequest` directly here rather than through `axios`
    // so that we can poll the response size as it comes back. If the response
    // has more that `options.limitChars` characters, we close the HTTP
    // connection and return the partial response. We could acheive this more
    // elegantly using `fetch` and the [Streams API][0], but the Streams API is
    // not supported in Internet Explorer.
    //
    // [0]: https://developer.mozilla.org/en-US/docs/Web/API/Streams_API

    const xhr = new XMLHttpRequest()
    const deferred = new Deferred()
    const {limitChars, extern} = options

    let interval: any

    const onError = () => {
      clearTimeout(interval)

      let bodyError = null

      try {
        const body = JSON.parse(xhr.responseText)

        bodyError = body.message || body.error
      } catch {
        if (xhr.responseText && xhr.responseText.trim() !== '') {
          bodyError = xhr.responseText
        }
      }

      const statusError = xhr.statusText
      const fallbackError = 'failed to execute Flux query'
      const error = new Error(bodyError || statusError || fallbackError)

      error.name = 'QueryError'

      deferred.reject(error)
    }

    const handleData = () => {
      if (xhr.responseText && xhr.responseText.length > limitChars) {
        xhr.abort()
        deferred.reject(new LargeResponseError())
      } else {
        interval = setTimeout(handleData, CHECK_LIMIT_INTERVAL)
      }
    }

    interval = setTimeout(handleData, CHECK_LIMIT_INTERVAL)

    xhr.onload = () => {
      if (xhr.status === 200) {
        clearTimeout(interval)
        deferred.resolve(xhr.responseText)
      } else {
        onError()
      }
    }

    xhr.onerror = onError

    const dialect = {annotations: ['group', 'datatype', 'default']}
    const body = extern ? {query, dialect, extern} : {query, dialect}
    const url = `${this.basePath}/query?orgID=${encodeURIComponent(orgID)}`

    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')

    if (this.serviceOptions && this.serviceOptions.headers) {
      for (const [k, v] of Object.entries(this.serviceOptions.headers)) {
        xhr.setRequestHeader(k, v)
      }
    }

    xhr.send(JSON.stringify(body))

    return {
      promise: deferred.promise,
      cancel: () => {
        clearTimeout(interval)
        xhr.abort()
        deferred.reject(new CancellationError())
      },
    }
  }
}
