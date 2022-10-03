<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [ListStacksRequest](./influxdb-client-apis.liststacksrequest.md)

## ListStacksRequest interface

<b>Signature:</b>

```typescript
interface ListStacksRequest 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [name?](./influxdb-client-apis.liststacksrequest.name.md) |  | string | <p><i>(Optional)</i> The stack name. Finds stack <code>events</code> with this name and returns the stacks.</p><p>Repeatable. To filter for more than one stack name, repeat this parameter with each name--for example:</p><p>- <code>http://localhost:8086/api/v2/stacks?&amp;orgID=INFLUX_ORG_ID&amp;name=project-stack-0&amp;name=project-stack-1</code></p> |
|  [orgID](./influxdb-client-apis.liststacksrequest.orgid.md) |  | string | <p>The ID of the organization that owns the stacks. Only returns stacks owned by this organization.</p><p>\#\#\#\# InfluxDB Cloud</p><p>- Doesn't require this parameter; InfluxDB only returns resources allowed by the API token.</p> |
|  [stackID?](./influxdb-client-apis.liststacksrequest.stackid.md) |  | string | <p><i>(Optional)</i> The stack ID. Only returns stacks with this ID.</p><p>Repeatable. To filter for more than one stack ID, repeat this parameter with each ID--for example:</p><p>- <code>http://localhost:8086/api/v2/stacks?&amp;orgID=INFLUX_ORG_ID&amp;stackID=09bd87cd33be3000&amp;stackID=09bef35081fe3000</code></p> |
