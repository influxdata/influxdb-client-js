import Client from '../index'

const token = process.env.INFLUXDB_TOKEN
const client = new Client('http://127.0.0.1:9999/api/v2', token)

const query = `
  from(bucket:"defbuck")
  |> range(start: -1d)
`

const response = client.queries.execute('someorgid', query)

response.stream.on('data', _row => {
  // handle row of data
})

response.stream.on('error', _err => {
  // handler error
})

response.stream.on('end', () => {
  // data done
})
