# Influxdb version 2.0 javascript client

## Disclaimer

This library is a work in progress and should not be considered production ready pre v1.0

## Usage

Initializing the client

```typescript

import Client from '@influxdata/influx'

const client = new Client('basepath', 'token')

```

### Querying

Using the client to execute a query

```typescript

const query = `
  from(bucket:"defbuck")
  |> range(start: -1d)
`

const {stream, cancel} = client.queries.execute('someorgid', query)

```

The returned stream will emit data on row at a time and follows the convention of a node.js stream

```typescript

stream.on('data', (row) => {
  console.log(row)
})

stream.on('error', (err) => {
  // handler error
})

stream.on('end', () => {
  // data done
})

```

or

```typescript

stream.pipe(process.stdout)

```

The returned cancel is a function that when called will cancel the request (it does not cause an error)

```typescript

cancel() // Cancels request

```

### Writing

Data written to the database should be in line protocol

```typescript

const data = '' // Line protocal string

const response = await client.write.create('orgID', 'bucketID', data)

```

## Development requirements

- OpenJDK 8 or higher
- Node 10.x or higher

## Development

```
npm i
```

## Generating base from swagger

```
npm run generate
```