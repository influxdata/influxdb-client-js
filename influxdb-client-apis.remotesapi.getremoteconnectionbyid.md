<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [RemotesAPI](./influxdb-client-apis.remotesapi.md) &gt; [getRemoteConnectionByID](./influxdb-client-apis.remotesapi.getremoteconnectionbyid.md)

## RemotesAPI.getRemoteConnectionByID() method

Retrieve a remote connection. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/GetRemoteConnectionByID](https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetRemoteConnectionByID)

<b>Signature:</b>

```typescript
getRemoteConnectionByID(request: GetRemoteConnectionByIDRequest, requestOptions?: RequestOptions): Promise<RemoteConnection>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetRemoteConnectionByIDRequest](./influxdb-client-apis.getremoteconnectionbyidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[RemoteConnection](./influxdb-client-apis.remoteconnection.md)<!-- -->&gt;

promise of response
