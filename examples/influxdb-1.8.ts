#!./node_modules/.bin/esr
////////////////////////////////////////////////////////////////////
// Shows how to use forward compatibility APIs from InfluxDB 1.8. //
////////////////////////////////////////////////////////////////////
// [InfluxDB 2.0 API compatibility endpoints](https://docs.influxdata.com/influxdb/v1.8/tools/api/#influxdb-2-0-api-compatibility-endpoints)
// are part of the InfluxDB 1.x line since InfluxDB 1.8.0. This allows you to leverage InfluxDB 2.x client libraries for both writing and
// querying data with Flux.
// https://docs.influxdata.com/influxdb/v1.8/about_the_project/releasenotes-changelog/#forward-compatibility

import {ClientOptions, InfluxDB, Point} from '@influxdata/influxdb-client'

const username = 'username'
const password = 'password'

const database = 'telegraf'
const retentionPolicy = 'autogen'

const bucket = `${database}/${retentionPolicy}`

const clientOptions: ClientOptions = {
  url: 'http://localhost:8086',
  token: `${username}:${password}`,
}

const influxDB = new InfluxDB(clientOptions)

async function writePoints() {
  console.log('*** WRITE POINTS ***')
  const writeAPI = influxDB.getWriteApi('', bucket)
  const point = new Point('mem')
    .tag('host', 'host1')
    .floatField('used_percent', 23.43234543)
  writeAPI.writePoint(point)
  await writeAPI.close()
}

async function queryRows() {
  console.log('*** QUERY ROWS ***')
  const queryAPI = influxDB.getQueryApi('')
  const query = `from(bucket: "${bucket}") |> range(start: -1h)`
  for await (const {values, tableMeta} of queryAPI.iterateRows(query)) {
    const o = tableMeta.toObject(values)
    console.log(`${o._time} ${o._measurement} : ${o._field}=${o._value}`)
  }
  console.log('\nQuery FINISHED')
}

writePoints()
  .then(() => queryRows())
  .catch((e) => console.error(e))
