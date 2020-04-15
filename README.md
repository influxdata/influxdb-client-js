# influxdb-client-javascript

[![CircleCI](https://circleci.com/gh/influxdata/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/influxdata/influxdb-client-js)
[![codecov](https://codecov.io/gh/influxdata/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/influxdata/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@influxdata/influxdb-client)](https://www.npmjs.com/package/@influxdata/influxdb-client)
[![GitHub issues](https://img.shields.io/github/issues-raw/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/pulls)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social)](https://www.influxdata.com/slack)

This repository contains the reference javascript client for InfluxDB 2.0. Both node and browser environments are supported.

#### Note: Use this client library with InfluxDB 2.x and InfluxDB 1.8+ ([see details](#influxdb-18-api-compatibility)). For connecting to InfluxDB 1.7 or earlier instances, see the [node-influx](https://github.com/node-influx/node-influx) client library.

## Features

InfluxDB 2.0 client consists of two packages

- @influxdata/influxdb-client
  - Querying data using the Flux language
  - Writing data
    - batched in chunks on background
    - automatic retries on write failures
- @influxdata/influxdb-client-js-apis
  - provides all other InfluxDB 2.0 APIs for managing
    - sources, buckets
    - tasks
    - authorizations
    - health check
    - ...
  - built on top of @influxdata/influxdb-client-js

## Installation

To use write or query InfluxDB in your project:

```
$npm install --save @influxdata/influxdb-client
```

or

```
$yarn add @influxdata/influxdb-client
```

To use InfluxDB management APIs in your project:

```
$npm install --save @influxdata/influxdb-client-apis
```

or

```
$yarn add @influxdata/influxdb-client-apis
```

## Usage

See [examples](./examples/README.md)

- @influxdata/influxdb-client
  - [write points or lines](./examples/write.js)
  - [query data](./examples/query.ts)
- @influxdata/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.js)
  - [health](./examples/health.js)
  
#### InfluxDB 1.8 API compatibility

InfluxDB 1.8.0 introduced forward compatibility APIs for InfluxDB 2.0. This allow you to easily move from InfluxDB 1.x to InfluxDB 2.0 Cloud or open source.

The following forward compatible APIs are available:

| API | Endpoint | Description |
|:----------|:----------|:----------|
| [QueryApi.ts](packages/core/src/QueryApi.ts) | [/api/v2/query](https://docs.influxdata.com/influxdb/latest/tools/api/#api-v2-query-http-endpoint) | Query data in InfluxDB 1.8.0+ using the InfluxDB 2.0 API and [Flux](https://docs.influxdata.com/flux/latest/) |
| [WriteApi.ts](packages/core/src/WriteApi.ts) | [/api/v2/write](https://docs.influxdata.com/influxdb/v1.8/tools/api/#api-v2-write-http-endpoint) | Write data to InfluxDB 1.8.0+ using the InfluxDB 2.0 API _(compatible with InfluxDB 2.0 client libraries)_ |
| [HealthAPI.ts](packages/apis/src/generated/HealthAPI.ts) | [/health](https://docs.influxdata.com/influxdb/v1.8/tools/api/#health-http-endpoint) | Check the health of your InfluxDB instance |    

For detail info see [InfluxDB 1.8 example](examples/influxdb-1.8.ts)

## Build Requirements

- node v12.13.1 or higher (older versions will work as well)
- yarn 1.9.4. or higher (older versions will work as well)

Run all unit tests:

```bash
$ yarn test:unit
```

Check code coverage of unit tests:

```bash
$ yarn coverage
```

## Development

### Releasing a new version

Ensure that:

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are on `master` and the working tree is clean

Then run the publish script in the root of the repo:

```
make publish VERSION=1.1.0
```

## Contributing

If you would like to contribute code you can do through GitHub by forking the repository and sending a pull request into the `master` branch.

## License

The InfluxDB 2.0 javascript client is released under the [MIT License](https://opensource.org/licenses/MIT).
