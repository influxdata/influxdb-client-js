# InfluxDB 2.0 browser JavaScript client

## Disclaimer

This library is a work in progress and should not be considered production ready pre v1.0.

## Usage

Initializing the client

```typescript

import Client from '@influxdata/influx'

const client = new Client('basepath', 'token')

```

### Querying

Using the client to execute a query:

```
const query = 'from(bucket: "my_bucket") |> range(start: -1h)'

const {promise, cancel} = client.queries.execute('someorgid', query)

const csv = await promise
```

The returned promise will eventually resolve with a [Flux CSV](https://github.com/influxdata/flux/blob/master/docs/SPEC.md#csv).

The request can also be canceled with the returned `cancel` function, in which case the promise will reject with a `CancellationError`:

```
cancel() // Cancels request
```

### Writing

Data written to the database should be in line protocol

```typescript

const data = '' // Line protocal string

const response = await client.write.create('orgID', 'bucketID', data)

```

## Development

### Requirements

- OpenJDK 8 or higher
- Node 10.x or higher

### Installing dependencies

```
yarn
```

### Generating base from swagger

```
yarn run generate
```

### Releasing a new version

Ensure that:

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are logged into Yarn (`yarn login`)
- You are on `master` and the working tree is clean

Then run the publish script in the root of the repo:

```
./publish
```
