<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [Axis](./influxdb-client-apis.axis.md)

## Axis interface

Axis used in a visualization.

<b>Signature:</b>

```typescript
export interface Axis 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [base?](./influxdb-client-apis.axis.base.md) | '' \| '2' \| '10' | <i>(Optional)</i> Radix for formatting axis values. |
|  [bounds?](./influxdb-client-apis.axis.bounds.md) | string\[\] | <i>(Optional)</i> The extents of the axis in the form \[lower, upper\]. Clients determine whether bounds are inclusive or exclusive of their limits. |
|  [label?](./influxdb-client-apis.axis.label.md) | string | <i>(Optional)</i> Description of the axis. |
|  [prefix?](./influxdb-client-apis.axis.prefix.md) | string | <i>(Optional)</i> Label prefix for formatting axis values. |
|  [scale?](./influxdb-client-apis.axis.scale.md) | [AxisScale](./influxdb-client-apis.axisscale.md) | <i>(Optional)</i> |
|  [suffix?](./influxdb-client-apis.axis.suffix.md) | string | <i>(Optional)</i> Label suffix for formatting axis values. |
