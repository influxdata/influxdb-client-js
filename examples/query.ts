#!./node_modules/.bin/ts-node
const {InfluxDB} = require('@influxdata/influxdb-client')

// You can generate a Token from the "Tokens Tab" in the UI
const token = 'my-token'
const org = 'my-org'

const client = new InfluxDB({url: 'http://localhost:8086', token: token})

const queryApi = client.getQueryApi(org)

const query = `option v = {timeRangeStart: -30d, timeRangeStop: now()}

from(bucket: "my-bucket")
	|> range(start: v.timeRangeStart, stop: v.timeRangeStop)
	|> filter(fn: (r) =>
		(r["_measurement"] == "m2m"))
	|> filter(fn: (r) =>
		(r["_field"] == "field"))`
queryApi.queryRows(query, {
  next(row, tableMeta) {
    const o = tableMeta.toObject(row)
    console.log(`${o._time} ${o._measurement}: ${o._field}=${o._value}`)
  },
  error(error) {
    console.error(error)
    console.log('Finished ERROR')
  },
  complete() {
    console.log('Finished SUCCESS')
  },
})
