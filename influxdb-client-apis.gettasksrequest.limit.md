<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [GetTasksRequest](./influxdb-client-apis.gettasksrequest.md) &gt; [limit](./influxdb-client-apis.gettasksrequest.limit.md)

## GetTasksRequest.limit property

The maximum number of [tasks](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) to return. Default is `100`<!-- -->. The minimum is `1` and the maximum is `500`<!-- -->.

To reduce the payload size, combine \_`type=basic`<!-- -->\_ and \_`limit`<!-- -->\_ (see \_Request samples\_). For more information about the `basic` response, see the \_`type`<!-- -->\_ parameter.

<b>Signature:</b>

```typescript
limit?: number;
```