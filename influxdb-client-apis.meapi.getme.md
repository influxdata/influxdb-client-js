<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [MeAPI](./influxdb-client-apis.meapi.md) &gt; [getMe](./influxdb-client-apis.meapi.getme.md)

## MeAPI.getMe() method

Retrieve the currently authenticated user. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/GetMe](https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetMe)

<b>Signature:</b>

```typescript
getMe(request?: GetMeRequest, requestOptions?: RequestOptions): Promise<UserResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetMeRequest](./influxdb-client-apis.getmerequest.md) | <i>(Optional)</i> request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[UserResponse](./influxdb-client-apis.userresponse.md)<!-- -->&gt;

promise of response
