# @influxdata/influxdb-client-giraffe

## Documentation

This section contains links to the client library documentation.

* [Product documentation](https://docs.influxdata.com/influxdb/v2.0/api-guide/client-libraries/nodejs/), [Getting Started](#usage)
* [Examples](../../examples)
* [API Reference](https://influxdata.github.io/influxdb-client-js/influxdb-client-giraffe.html)
* [Changelog](../../CHANGELOG.md)

## Usage

This package provides an efficient `queryToTable` function that queries
InfluxDB (v2) and returns a Table that is then directly suitable as a data input
of various [Giraffe](https://github.com/influxdata/giraffe) visualizations.

```js
import {InfluxDB} from '@influxdata/influxdb-client'
import {queryToTable} from '@influxdata/influxdb-client-giraffe'
import {newTable, Plot} from '@influxdata/giraffe'
...
const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const table = await queryToTable(
  api,
  'from(bucket: "my-bucket") |> range(start: -30d)',
  newTable,
  {maxTableRows: 5000}
)
...
<Plot config={{table, ...}}></Plot>
...
```

See https://github.com/influxdata/influxdb-client-js to know more.
