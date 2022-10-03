<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [TasksAPI](./influxdb-client-apis.tasksapi.md) &gt; [getTasksIDRuns](./influxdb-client-apis.tasksapi.gettasksidruns.md)

## TasksAPI.getTasksIDRuns() method

List runs for a task. See [https://docs.influxdata.com/influxdb/v2.4/api/\#operation/GetTasksIDRuns](https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDRuns)

<b>Signature:</b>

```typescript
getTasksIDRuns(request: GetTasksIDRunsRequest, requestOptions?: RequestOptions): Promise<Runs>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetTasksIDRunsRequest](./influxdb-client-apis.gettasksidrunsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Runs](./influxdb-client-apis.runs.md)<!-- -->&gt;

promise of response
