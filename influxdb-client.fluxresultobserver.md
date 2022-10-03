<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [FluxResultObserver](./influxdb-client.fluxresultobserver.md)

## FluxResultObserver interface

Observes results of a flux query.

<b>Signature:</b>

```typescript
interface FluxResultObserver<T> 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [useCancellable?](./influxdb-client.fluxresultobserver.usecancellable.md) |  | (cancellable: [Cancellable](./influxdb-client.cancellable.md)<!-- -->) =&gt; void | <i>(Optional)</i> Setups cancellable that can abort flux result processing. |
|  [useResume?](./influxdb-client.fluxresultobserver.useresume.md) |  | (resume: () =&gt; void) =&gt; void | <i>(Optional)</i> Setups a callback that resumes reading of next data, it is called whenever [FluxResultObserver.next()](./influxdb-client.fluxresultobserver.next.md) returns <code>false</code>. |

## Methods

|  Method | Description |
|  --- | --- |
|  [complete()](./influxdb-client.fluxresultobserver.complete.md) | Signalizes completition. |
|  [error(error)](./influxdb-client.fluxresultobserver.error.md) | Signalizes processing error. |
|  [next(row, tableMeta)](./influxdb-client.fluxresultobserver.next.md) | Inform about a next record in a table. |
