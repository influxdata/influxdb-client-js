#!./node_modules/.bin/ts-node
////////////////////////////////////////////////////
// Shows how to use InfluxDB query API with rxjs. //
////////////////////////////////////////////////////

import {InfluxDB} from '@influxdata/influxdb-client'
import {from} from 'rxjs'
import {map} from 'rxjs/operators'
import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)

const fluxQuery =
  'from(bucket:"my-bucket") |> range(start: -1d) |> filter(fn: (r) => r._measurement == "temperature")'

console.log('*** QUERY ROWS ***')
// performs query and receive line table metadata and rows
// https://docs.influxdata.com/influxdb/latest/reference/syntax/annotated-csv/
from(queryApi.rows(fluxQuery))
  .pipe(map(({values, tableMeta}) => tableMeta.toObject(values)))
  .subscribe({
    next(o) {
      console.log(
        `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
      )
    },
    error(e) {
      console.error(e)
      console.log('\nFinished ERROR')
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  })

// performs query and receive line results in annotated csv format
// https://docs.influxdata.com/influxdb/latest/reference/syntax/annotated-csv/
// from(queryApi.lines(fluxQuery)).forEach(console.log)
