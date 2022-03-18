<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [FluxTableMetaData](./influxdb-client.fluxtablemetadata.md) &gt; [column](./influxdb-client.fluxtablemetadata.column.md)

## FluxTableMetaData.column() method

Gets columns by name

<b>Signature:</b>

```typescript
column(label: string, errorOnMissingColumn?: boolean): FluxTableColumn;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  label | string | column label |
|  errorOnMissingColumn | boolean | throw error on missing column (by default), return UNKNOWN\_COLUMN when false |

<b>Returns:</b>

[FluxTableColumn](./influxdb-client.fluxtablecolumn.md)

table column

## Exceptions

IllegalArgumentError if column is not found
