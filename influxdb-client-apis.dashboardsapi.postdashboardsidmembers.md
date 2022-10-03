<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [DashboardsAPI](./influxdb-client-apis.dashboardsapi.md) &gt; [postDashboardsIDMembers](./influxdb-client-apis.dashboardsapi.postdashboardsidmembers.md)

## DashboardsAPI.postDashboardsIDMembers() method

Add a member to a dashboard. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/PostDashboardsIDMembers](https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostDashboardsIDMembers)

<b>Signature:</b>

```typescript
postDashboardsIDMembers(request: PostDashboardsIDMembersRequest, requestOptions?: RequestOptions): Promise<ResourceMember>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PostDashboardsIDMembersRequest](./influxdb-client-apis.postdashboardsidmembersrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[ResourceMember](./influxdb-client-apis.resourcemember.md)<!-- -->&gt;

promise of response
