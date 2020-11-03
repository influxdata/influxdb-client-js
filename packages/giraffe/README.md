# @influxdata/influxdb-client-giraffe

This package provides an efficient `queryToTable` function that queries
InfluxDB (v2) and returns a Table that is then directly suitable as a data input
of various [Giraffe](https://github.com/influxdata/giraffe) visualizations.

```js
import {InfluxDB} from '@influxdata/influxdb-client'
import {queryTable} from '@influxdata/influxdb-client-giraffe'
import {newTable, Plot} from '@influxdata/giraffe'
...
const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const table = await queryTable(
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
