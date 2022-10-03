<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [Dialect](./influxdb-client-apis.dialect.md) &gt; [dateTimeFormat](./influxdb-client-apis.dialect.datetimeformat.md)

## Dialect.dateTimeFormat property

The format for timestamps in results. Default is [\`RFC3339\` date/time format](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#rfc3339-timestamp)<!-- -->. To include nanoseconds in timestamps, use `RFC3339Nano`<!-- -->.

\#\#\#\# Example formatted date/time values

\| Format \| Value \| \|:\-\-\-\-\-\-\-\-\-\-\-\-\|:\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--\| \| `RFC3339` \| `"2006-01-02T15:04:05Z07:00"` \| \| `RFC3339Nano` \| `"2006-01-02T15:04:05.999999999Z07:00"` \|

<b>Signature:</b>

```typescript
dateTimeFormat?: 'RFC3339' | 'RFC3339Nano';
```