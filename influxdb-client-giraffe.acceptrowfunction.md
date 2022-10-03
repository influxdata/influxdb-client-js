<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-giraffe](./influxdb-client-giraffe.md) &gt; [AcceptRowFunction](./influxdb-client-giraffe.acceptrowfunction.md)

## AcceptRowFunction type

AcceptRowFunction allows to accept/reject specific rows or terminate processing.

<b>Signature:</b>

```typescript
declare type AcceptRowFunction = (row: string[], tableMeta: FluxTableMetaData) => true | false | undefined;
```
<b>References:</b> [FluxTableMetaData](./influxdb-client.fluxtablemetadata.md)
