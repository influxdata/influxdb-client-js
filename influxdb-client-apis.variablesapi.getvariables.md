<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [VariablesAPI](./influxdb-client-apis.variablesapi.md) &gt; [getVariables](./influxdb-client-apis.variablesapi.getvariables.md)

## VariablesAPI.getVariables() method

List all variables. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/GetVariables](https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetVariables)

<b>Signature:</b>

```typescript
getVariables(request?: GetVariablesRequest, requestOptions?: RequestOptions): Promise<Variables>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetVariablesRequest](./influxdb-client-apis.getvariablesrequest.md) | <i>(Optional)</i> request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Variables](./influxdb-client-apis.variables.md)<!-- -->&gt;

promise of response
