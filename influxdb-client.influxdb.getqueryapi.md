<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [InfluxDB](./influxdb-client.influxdb.md) &gt; [getQueryApi](./influxdb-client.influxdb.getqueryapi.md)

## InfluxDB.getQueryApi() method

Creates QueryApi for the supplied organization .

<b>Signature:</b>

```typescript
getQueryApi(org: string | QueryOptions): QueryApi;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  org | string \| [QueryOptions](./influxdb-client.queryoptions.md) | organization or query options |

<b>Returns:</b>

[QueryApi](./influxdb-client.queryapi.md)

QueryApi instance

## Remarks

See also [query.ts example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/query.ts)<!-- -->, [queryWithParams.ts example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/queryWithParams.ts)<!-- -->, [rxjs-query.ts example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/rxjs-query.ts)<!-- -->, and [browser example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/index.html)<!-- -->,
