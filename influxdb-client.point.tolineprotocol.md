<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [Point](./influxdb-client.point.md) &gt; [toLineProtocol](./influxdb-client.point.tolineprotocol.md)

## Point.toLineProtocol() method

Creates an InfluxDB protocol line out of this instance.

<b>Signature:</b>

```typescript
toLineProtocol(settings?: PointSettings): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  settings | [PointSettings](./influxdb-client.pointsettings.md) | settings define the exact representation of point time and can also add default tags |

<b>Returns:</b>

string \| undefined

an InfluxDB protocol line out of this instance
