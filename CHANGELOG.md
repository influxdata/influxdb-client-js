## 1.5.0 [unreleased]

## 1.4.0 [2020-06-19]

### Features

1. [#186](https://github.com/influxdata/influxdb-client-js/pull/186): Allow to create parameterized queries using flux tagged template.
1. [#191](https://github.com/influxdata/influxdb-client-js/pull/191): Enhance API generator, regenerate APIs from swagger.
1. [#196](https://github.com/influxdata/influxdb-client-js/pull/196): Remove influxql option from Query API.
1. [#200](https://github.com/influxdata/influxdb-client-js/pull/200): Enhance Query API with collectRows and collectLines.
1. [#201](https://github.com/influxdata/influxdb-client-js/pull/201): Allow to supply listener for write failures.
1. [#203](https://github.com/influxdata/influxdb-client-js/pull/203): Regenerate APIs from swagger.

### Documentation

1. [#189](https://github.com/influxdata/influxdb-client-js/pull/189): Add timestamp to write example.
1. [#193](https://github.com/influxdata/influxdb-client-js/pull/193): Explain write API buffering in the write example and API docs.

## 1.3.0 [2020-05-15]

### Features

1. [#177](https://github.com/influxdata/influxdb-client-js/pull/177): Allow to receive query results as [Observable](https://github.com/tc39/proposal-observable)
1. [#181](https://github.com/influxdata/influxdb-client-js/pull/181): Update APIs from swagger as of 2020-04-30
1. [#182](https://github.com/influxdata/influxdb-client-js/pull/182): Allow setting the time that should be reported as "now" in the query
1. [#183](https://github.com/influxdata/influxdb-client-js/pull/183): Remove trailing slash from connection URL
1. [#185](https://github.com/influxdata/influxdb-client-js/pull/185): Allow to create WriteApi with custom write options.

## 1.2.0 [2020-04-17]

### Features

1. [#174](https://github.com/influxdata/influxdb-client-js/pull/174): Allow to set Point's timestamp using Date or number

### Bug Fixes

1. [#160](https://github.com/influxdata/influxdb-client-js/issues/160): Disabled using credentials for CORS
1. [#173](https://github.com/influxdata/influxdb-client-js/pull/173): Use links that are clickable in VSCode

### Security

1. [#157](https://github.com/influxdata/influxdb-client-js/issues/157): [ESLint dependencies are vulnerable (ReDoS and Prototype Pollution)](https://github.com/advisories/GHSA-7fhm-mqm4-2wp7)

### Documentation

1. [#175](https://github.com/influxdata/influxdb-client-js/pull/175): Clarify how to use a client with InfluxDB 1.8

### CI

1. [#167](https://github.com/influxdata/influxdb-client-js/pull/167): The CircleCI publish prerelease packages

## 1.1.0 [2020-03-13]

### Features

1. [#152](https://github.com/influxdata/influxdb-client-js/issues/152): Set User-Agent to influxdb-client-js/VERSION for all requests

## 1.0.0 [2020-03-09]

### Core

- initial release of new client version

### Apis

- initial release of new client version
