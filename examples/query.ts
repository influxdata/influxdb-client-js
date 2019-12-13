#!../node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB} from '../src'
import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)

// performs query and receive line results in annotated csv format
// https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
queryApi.queryLines(
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
