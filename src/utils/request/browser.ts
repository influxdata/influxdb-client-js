import {ServiceOptions, File} from '../../types'
import {PassThrough, Stream} from 'stream'

export class CancellationError extends Error {}
const CHECK_LIMIT_INTERVAL = 200

interface ResponseError extends Error {
  status?: number
}

export default function(
  orgID: string,
  basePath: string,
  baseOptions: ServiceOptions,
  query: string,
  extern?: File
): {stream: Stream; cancel: () => void} {
  const out = new PassThrough({encoding: 'utf8'})
  const fullURL = `${basePath}/query?orgID=${encodeURIComponent(orgID)}`

  const xhr = new XMLHttpRequest()

  let currentIndex = 0
  let timer: any = null
  let row = ''

  const handleData = (): void => {
    const i0 = currentIndex
    const i1 = xhr.responseText.length

    for (let i = i0; i < i1; i++) {
      row += xhr.responseText[i]

      if (xhr.responseText[i] === '\n') {
        out.write(row)
        row = ''
      }
    }

    currentIndex = i1
    timer = setTimeout(handleData, CHECK_LIMIT_INTERVAL)
  }

  const handleError = () => {
    let bodyError = null

    clearTimeout(timer)

    try {
      bodyError = JSON.parse(xhr.responseText).message
    } catch {
      if (xhr.responseText && xhr.responseText.trim() !== '') {
        bodyError = xhr.responseText
      }
    }
    const err: ResponseError = new Error(bodyError)
    err.status = xhr.status

    out.emit('error', err)
  }

  xhr.onload = () => {
    clearTimeout(timer)
    if (xhr.status === 200) {
      handleData()
      out.end()
    } else {
      handleError()
    }
  }

  xhr.onerror = handleError

  const dialect = {annotations: ['group', 'datatype', 'default']}
  const body = extern ? {query, dialect, extern} : {query, dialect}

  xhr.open('POST', fullURL)
  xhr.setRequestHeader('Content-Type', 'application/json')
  if (baseOptions && baseOptions.headers) {
    xhr.setRequestHeader('Authorization', baseOptions.headers.Authorization)
  }
  xhr.send(JSON.stringify(body))

  timer = setTimeout(handleData, CHECK_LIMIT_INTERVAL)

  return {
    stream: out,
    cancel() {
      xhr.abort()
      out.end()
    },
  }
}
