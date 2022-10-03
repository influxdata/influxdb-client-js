<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [DashboardsAPI](./influxdb-client-apis.dashboardsapi.md) &gt; [postDashboards](./influxdb-client-apis.dashboardsapi.postdashboards.md)

## DashboardsAPI.postDashboards() method

Create a dashboard. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/PostDashboards](https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostDashboards)

<b>Signature:</b>

```typescript
postDashboards(request: PostDashboardsRequest, requestOptions?: RequestOptions): Promise<Dashboard | DashboardWithViewProperties>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PostDashboardsRequest](./influxdb-client-apis.postdashboardsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Dashboard](./influxdb-client-apis.dashboard.md) \| [DashboardWithViewProperties](./influxdb-client-apis.dashboardwithviewproperties.md)<!-- -->&gt;

promise of response
