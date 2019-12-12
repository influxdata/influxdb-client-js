#!../node_modules/.bin/ts-node
import {InfluxDB} from '../src'
import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)

queryApi.queryRaw(
  'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")',
  {
    error(error: Error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    next(line: string) {
      console.log(line)
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  }
)
