<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [ChecksAPI](./influxdb-client-apis.checksapi.md) &gt; [getChecksIDLabels](./influxdb-client-apis.checksapi.getchecksidlabels.md)

## ChecksAPI.getChecksIDLabels() method

List all labels for a check. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/GetChecksIDLabels](https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetChecksIDLabels)

<b>Signature:</b>

```typescript
getChecksIDLabels(request: GetChecksIDLabelsRequest, requestOptions?: RequestOptions): Promise<LabelsResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetChecksIDLabelsRequest](./influxdb-client-apis.getchecksidlabelsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[LabelsResponse](./influxdb-client-apis.labelsresponse.md)<!-- -->&gt;

promise of response
