import {ServiceOptions, File} from '../../types'
import Axios from 'axios'
import {PassThrough, Stream} from 'stream'

export class CancellationError extends Error {}

export default function(
  orgID: string,
  basePath: string,
  baseOptions: ServiceOptions,
  query: string,
  extern?: File
): {stream: Stream; cancel: () => void} {
  const fullURL = `${basePath}/query?orgID=${encodeURIComponent(orgID)}`
  const dialect = {annotations: ['group', 'datatype', 'default']}
  const body = extern ? {query, dialect, extern} : {query, dialect}
  const source = Axios.CancelToken.source()

  let headers = {
    ...(baseOptions.headers || {}),
    'Content-Type': 'application/json',
  }

  const out = new PassThrough({encoding: 'utf8'})

  Axios.post(fullURL, body, {
    headers: headers,
    responseType: 'stream',
    cancelToken: source.token,
  })
    .then(resp => {
      resp.data.on('data', (d: {toString: () => string}) => {
        out.write(d.toString())
      })

      resp.data.on('error', (err: Error) => {
        out.emit('error', err)
      })

      resp.data.on('end', () => {
        out.end()
      })
    })
    .catch(err => {
      if (!Axios.isCancel(err)) {
        out.emit('error', err)
      }
    })

  return {
    stream: out,
    cancel() {
      source.cancel()
      out.end()
    },
  }
}
