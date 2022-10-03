<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [GetDebugPprofGoroutineRequest](./influxdb-client-apis.getdebugpprofgoroutinerequest.md)

## GetDebugPprofGoroutineRequest interface

<b>Signature:</b>

```typescript
interface GetDebugPprofGoroutineRequest 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [debug?](./influxdb-client-apis.getdebugpprofgoroutinerequest.debug.md) |  | number | <p><i>(Optional)</i> - <code>0</code>: (Default) Return the report as a gzip-compressed protocol buffer. - <code>1</code>: Return a response body with the report formatted as human-readable text with comments that translate addresses to function names and line numbers for debugging.</p><p><code>debug=1</code> is mutually exclusive with the <code>seconds</code> query parameter.</p> |
|  [seconds?](./influxdb-client-apis.getdebugpprofgoroutinerequest.seconds.md) |  | string | <p><i>(Optional)</i> Number of seconds to collect statistics.</p><p><code>seconds</code> is mutually exclusive with <code>debug=1</code>.</p> |
