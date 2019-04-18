import {ServiceOptions} from '../../types'
import {PassThrough, Stream} from 'stream'

export class CancellationError extends Error {}
const CHECK_LIMIT_INTERVAL = 200

export default function(
  orgID: string,
  basePath: string,
  baseOptions: ServiceOptions,
  query: string,
  extern: File
): {stream: Stream; cancel: () => void} {
  const out = new PassThrough({encoding: 'utf8'})
  const fullURL = `${basePath}/query?orgID=${encodeURIComponent(orgID)}`

  const xhr = new XMLHttpRequest()
  let rowCountIndex = 0
  let row = ''
  let interval: any = null

  const handleData = (): void => {
    for (let i = rowCountIndex; i < xhr.responseText.length; i++) {
      row += xhr.responseText[i]
      if (xhr.responseText[i] === '\n') {
        out.write(row)
        row = ''
      }
    }
  }

  const handleError = () => {
    let bodyError = null

    clearInterval(interval)

    try {
      bodyError = JSON.parse(xhr.responseText).message
    } catch {
      if (xhr.responseText && xhr.responseText.trim() !== '') {
        bodyError = xhr.responseText
      }
    }

    out.emit('error', bodyError)
  }

  xhr.onload = () => {
    clearInterval(interval)
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

  xhr.open('POST', `${fullURL}/query?orgID=${encodeURIComponent(orgID)}`)
  xhr.setRequestHeader('Content-Type', 'application/json')
  if (baseOptions && baseOptions.headers) {
    xhr.setRequestHeader('Authorization', baseOptions.headers.Authorization)
  }
  xhr.send(JSON.stringify(body))

  interval = setInterval(handleData, CHECK_LIMIT_INTERVAL)

  return {
    stream: out,
    cancel() {
      xhr.abort()
      out.end()
    },
  }
}
