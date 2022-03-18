<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [FluxTableColumn](./influxdb-client.fluxtablecolumn.md)

## FluxTableColumn interface

FluxTableColumn describes [flux table](http://bit.ly/flux-spec#table) column.

<b>Signature:</b>

```typescript
export interface FluxTableColumn 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [dataType](./influxdb-client.fluxtablecolumn.datatype.md) | [ColumnType](./influxdb-client.columntype.md) | The data type of column (e.g., "string", "long", "dateTime:RFC3339"). |
|  [defaultValue](./influxdb-client.fluxtablecolumn.defaultvalue.md) | string | Default value to be used for rows whose string value is an empty string. |
|  [get](./influxdb-client.fluxtablecolumn.get.md) | (row: string\[\]) =&gt; any | Get returns a JavaScript object of this column in the supplied result row, using default deserializers. |
|  [group](./influxdb-client.fluxtablecolumn.group.md) | boolean | Boolean flag indicating if the column is a part of the table's group key. |
|  [index](./influxdb-client.fluxtablecolumn.index.md) | number | Index of this column in a row array. |
|  [label](./influxdb-client.fluxtablecolumn.label.md) | string | Label (e.g., "\_start", "\_stop", "\_time"). |
