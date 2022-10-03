<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [GetBucketsRequest](./influxdb-client-apis.getbucketsrequest.md)

## GetBucketsRequest interface

<b>Signature:</b>

```typescript
interface GetBucketsRequest 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [after?](./influxdb-client-apis.getbucketsrequest.after.md) |  | string | <i>(Optional)</i> Resource ID to seek from. Results are not inclusive of this ID. Use <code>after</code> instead of <code>offset</code>. |
|  [id?](./influxdb-client-apis.getbucketsrequest.id.md) |  | string | <i>(Optional)</i> Bucket ID. Only returns the bucket with this ID. |
|  [limit?](./influxdb-client-apis.getbucketsrequest.limit.md) |  | number | <i>(Optional)</i> Limits the number of records returned. Default is <code>20</code>. |
|  [name?](./influxdb-client-apis.getbucketsrequest.name.md) |  | string | <i>(Optional)</i> Bucket name. Only returns buckets with this specific name. |
|  [offset?](./influxdb-client-apis.getbucketsrequest.offset.md) |  | number | <i>(Optional)</i> The offset for pagination. The number of records to skip. |
|  [org?](./influxdb-client-apis.getbucketsrequest.org.md) |  | string | <p><i>(Optional)</i> Organization name. The name of the organization.</p><p>\#\#\#\# InfluxDB Cloud</p><p>- Doesn't use <code>org</code> or <code>orgID</code>. - Creates a bucket in the organization associated with the authorization (API token).</p><p>\#\#\#\# InfluxDB OSS</p><p>- Accepts either <code>org</code> or <code>orgID</code>. - InfluxDB creates the bucket within this organization.</p> |
|  [orgID?](./influxdb-client-apis.getbucketsrequest.orgid.md) |  | string | <p><i>(Optional)</i> Organization ID. The organization ID.</p><p>\#\#\#\# InfluxDB Cloud</p><p>- Doesn't use <code>org</code> or <code>orgID</code>. - Creates a bucket in the organization associated with the authorization (API token).</p><p>\#\#\#\# InfluxDB OSS</p><p>- Accepts either <code>org</code> or <code>orgID</code>. - InfluxDB creates the bucket within this organization.</p> |
