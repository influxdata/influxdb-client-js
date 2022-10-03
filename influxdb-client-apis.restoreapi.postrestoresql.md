<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [RestoreAPI](./influxdb-client-apis.restoreapi.md) &gt; [postRestoreSQL](./influxdb-client-apis.restoreapi.postrestoresql.md)

## RestoreAPI.postRestoreSQL() method

Overwrite the embedded SQL store on the server with a backed-up snapshot. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/PostRestoreSQL](https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostRestoreSQL)

<b>Signature:</b>

```typescript
postRestoreSQL(request: PostRestoreSQLRequest, requestOptions?: RequestOptions): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PostRestoreSQLRequest](./influxdb-client-apis.postrestoresqlrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;void&gt;

promise of response
