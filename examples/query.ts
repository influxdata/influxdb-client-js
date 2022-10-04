#!./node_modules/.bin/esr
/* eslint-disable @typescript-eslint/no-unused-vars */
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB, FluxTableMetaData} from '@influxdata/influxdb-client'
import {url, token, org} from './env.mjs'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const fluxQuery =
  'from(bucket:"my-bucket") |> range(start: -1d) |> filter(fn: (r) => r._measurement == "temperature")'

// There are more ways of how to receive results,
// the essential ones are shown in functions below.
// Execution of a particular function follow its declaration,
// comment/uncomment it at will.
// See also rxjs-query.ts and queryWithParamas.mjs .

// Execute query and receive table metadata and table row values using async iterator.
async function iterateRows() {
  console.log('*** IterateRows ***')
  for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)) {
    // the following line creates an object for each row
    const o = tableMeta.toObject(values)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )

    // alternatively, you can get only a specific column value without
    // the need to create an object for every row
    // console.log(tableMeta.get(row, '_time'))
  }
  console.log('\nIterateRows SUCCESS')
}
iterateRows().catch((error) => console.error('IterateRows ERROR', error))

// Execute query and receive table metadata and rows in a result observer.
function queryRows() {
  console.log('*** QueryRows ***')
  queryApi.queryRows(fluxQuery, {
    next: (row: string[], tableMeta: FluxTableMetaData) => {
      // the following line creates an object for each row
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      console.log(
        `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
      )

      // alternatively, you can get only a specific column value without
      // the need to create an object for every row
      // console.log(tableMeta.get(row, '_time'))
    },
    error: (error: Error) => {
      console.error(error)
      console.log('\nQueryRows ERROR')
    },
    complete: () => {
      console.log('\nQueryRows SUCCESS')
    },
  })
}
queryRows()

// Execute query and collect result rows in a Promise.
// Use with caution, it copies the whole stream of results into memory.
async function collectRows() {
  console.log('\n*** CollectRows ***')
  const data = await queryApi.collectRows(
    fluxQuery //, you can also specify a row mapper as a second argument
  )
  data.forEach((x) => console.log(JSON.stringify(x)))
  console.log('\nCollect ROWS SUCCESS')
}
// collectRows().catch((error) => console.error('CollectRows ERROR', error))

// Execute query and return the whole result as a string.
// Use with caution, it copies the whole stream of results into memory.
async function queryRaw() {
  const result = await queryApi.queryRaw(fluxQuery)
  console.log(result)
  console.log('\nQueryRaw SUCCESS')
}
// queryRaw().catch((error) => console.error('QueryRaw ERROR', error))

// Execute query and receive result CSV lines in an observer
function queryLines() {
  queryApi.queryLines(fluxQuery, {
    next: (line: string) => {
      console.log(line)
    },
    error: (error: Error) => {
      console.error(error)
      console.log('\nQueryLines ERROR')
    },
    complete: () => {
      console.log('\nQueryLines SUCCESS')
    },
  })
}
// queryLines()

// Execute query and receive result csv lines using async iterable
async function iterateLines() {
  for await (const line of queryApi.iterateLines(fluxQuery)) {
    console.log(line)
  }
  console.log('\nIterateLines SUCCESS')
}
// iterateLines().catch((error) => console.error('\nIterateLines ERROR', error))
