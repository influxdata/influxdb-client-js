#!/usr/bin/env node
//////////////////////////////////////////////////////////////////////////
// Shows how to control the way of how points are written into InfluxDB //
//////////////////////////////////////////////////////////////////////////
/*
This example shows how to use the client's Write API to control the way of how points 
are sent to InfluxDB server.

It is based on the simpler write.js example, it assumes that you are familiar with it.
The write.js example asynchronously writes points to InfluxDB and assumes that the library
takes care about retries upon failures and optimizes networking to send points in 
batches and on background. This approach is good for sending various metrics from your 
application, but it does not scale well when you need to import bigger amount of data. See 
https://github.com/influxdata/influxdb-client-js/issues/213 for details.
*/

const {
  InfluxDB,
  Point,
  flux,
  fluxDuration,
  DEFAULT_WriteOptions,
} = require('@influxdata/influxdb-client')
const {url, token, org, bucket} = require('./env')
const {hostname} = require('os')

console.log('*** WRITE POINTS ***')
/* points/lines are batched in order to minimize networking and increase performance */
const flushBatchSize = DEFAULT_WriteOptions.batchSize
/* count of demo data to import */
const demoCount = 10_000
/* name of demo measurement */
const demoMeasurement = 'temperature2'

// explains all write options
const writeOptions = {
  /* the maximum points/line to send in a single batch to InfluxDB server */
  batchSize: flushBatchSize + 1, // don't let automatically flush data
  /* default tags to add to every point */
  defaultTags: {location: hostname},
  /* maximum time in millis to keep points in an unflushed batch, 0 means don't periodically flush */
  flushInterval: 0,
  /* maximum size of the retry buffer - it contains items that could not be sent for the first time */
  maxBufferLines: 30_000,
  /* the count of internally-scheduled retries upon write failure, the delays between write attempts follow an exponential backoff strategy if there is no Retry-After HTTP header */
  maxRetries: 0, // do not retry writes
  // ... there are more write options that can be customized, see
  // https://influxdata.github.io/influxdb-client-js/influxdb-client.writeoptions.html and
  // https://influxdata.github.io/influxdb-client-js/influxdb-client.writeretryoptions.html
}

// Node.js HTTP client OOTB does not reuse established TCP connections, a custom node HTTP agent
// can be used to reuse them and thus reduce the count of newly established networking sockets
const {Agent} = require('http')
const keepAliveAgent = new Agent({
  keepAlive: false, // reuse existing connections
  keepAliveMsecs: 20 * 1000, // 20 seconds keep alive
})
process.on('exit', () => keepAliveAgent.destroy())

// create InfluxDB with a custom HTTP agent
const influxDB = new InfluxDB({
  url,
  token,
  transportOptions: {
    agent: keepAliveAgent,
  },
})

async function importData() {
  const writeApi = influxDB.getWriteApi(org, bucket, 'ns', writeOptions)
  // import a bigger count of items
  for (let i = 0; i < demoCount; i++) {
    const point = new Point(demoMeasurement)
      .tag('example', 'writeAdvanced.ts')
      .floatField('value', 20 + Math.round(100 * Math.random()) / 10)
    writeApi.writePoint(point)
    // control the way of how data are flushed
    if ((i + 1) % flushBatchSize === 0) {
      console.log(`flush writeApi: chunk #${(i + 1) / flushBatchSize}`)
      try {
        // write the data to InfluxDB server, wait for it
        await writeApi.flush()
      } catch (e) {
        console.error()
      }
    }
  }

  console.log(
    'close writeApi: flush unwritten points, cancel scheduled retries'
  )
  await writeApi.close()

  // print the count of items in the last 5 minutes
  const start = fluxDuration('-5m')
  const countQuery = flux`from(bucket: ${bucket})
     |> range(start: ${start})
     |> filter(fn: (r) => r._measurement == ${demoMeasurement}) 
     |> count(column: "_value")`
  const count = await influxDB
    .getQueryApi(org)
    .collectRows(countQuery, (row, tableMeta) =>
      Number.parseInt(row[tableMeta.column('_value').index])
    )
    .then(results => results.reduce((acc, val) => acc + val, 0))
  console.log(`Size of temperature2 measurement since '${start}': `, count)
}

const start = Date.now()
importData()
  .then(() =>
    console.log(
      `FINISHED writing ${demoCount} points (${Date.now() - start} millis}`
    )
  )
  .catch(e => console.error('FINISHED', e))
