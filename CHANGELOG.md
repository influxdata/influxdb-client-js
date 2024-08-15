## 1.35.0 [2024-08-15]

### Bug Fixes

1. [#1044](https://github.com/influxdata/influxdb-client-js/pull/1044): Allow 201 status code in a write response.

## 1.34.0 [2024-07-26]

### Breaking Changes

:warning: Drop supports for node v14, v15 and v16 in CI.

### Features:

1. [#1005](https://github.com/influxdata/influxdb-client-js/pull/1005): Token stored as a private class property.
2. [#1019](https://github.com/influxdata/influxdb-client-js/pull/1019): Propagates headers from HTTP response when an error is returned from the server.
3. [#1020](https://github.com/influxdata/influxdb-client-js/pull/1020): Adds example of working with `HttpError` response.

### CI

1. [#893](https://github.com/influxdata/influxdb-client-js/pull/893): Add node v20 to CI.
1. [#953](https://github.com/influxdata/influxdb-client-js/pull/953): Add node v21 to CI.

## 1.33.2 [2023-02-23]

### Bug Fixes

1. Various updates to dependencies

## 1.33.1 [2023-01-26]

### Bug Fixes

1. Various updates to dependencies

## 1.33.0 [2022-12-02]

### Bug Fixes

1. Various updates to dependencies

## 1.32.0 [2022-11-01]

### Features

1. [#592](https://github.com/influxdata/influxdb-client-js/pull/592): Allow to receive query results using for-await loop.

### Other

1. [#624](https://github.com/influxdata/influxdb-client-js/pull/624): Upgrade to the latest node v18 LTS.

### Breaking Changes

1. [#592](https://github.com/influxdata/influxdb-client-js/pull/592): The client packages newly require ES2018 runtime (was ES2015). The javascript code now needs [async generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator#browser_compatibility) and [for-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of#browser_compatibility) loop. At least the latest node 14 is required because of mature support for iterable http response. Deno and all current modern browsers support ES2018 for years back. This change shoudn't cause any harm in existing installations. In case of troubles, configure your project with babel ES2018 preset to produce ES2015 code.

### Other

1. [#611](https://github.com/influxdata/influxdb-client-js/pull/611): Upgrade lerna to v6.

## 1.31.0 [2022-10-03]

### Features

1. [#588](https://github.com/influxdata/influxdb-client-js/pull/588): Allow to pause/resume flux query result communication observer.

### Bug Fixes

1. [#604](https://github.com/influxdata/influxdb-client-js/pull/604): Fix unhandled promise rejection in write retry.

## 1.30.0 [2022-09-29]

### Features

1. [#571](https://github.com/influxdata/influxdb-client-js/pull/571): Regenerate APIs from swagger.

### Bug Fixes

1. [#567](https://github.com/influxdata/influxdb-client-js/pull/567): Repair generated API documentation so that links between packages are rendered.
1. [#570](https://github.com/influxdata/influxdb-client-js/pull/570): Rename Headers to HttpHeaders to avoid clash with DOM's Headers type.
1. [#578](https://github.com/influxdata/influxdb-client-js/pull/578): Repair deserialization of a missing boolean value.
1. [#590](https://github.com/influxdata/influxdb-client-js/pull/590): Repair apis URL in the browser example.

### Other

1. [#571](https://github.com/influxdata/influxdb-client-js/pull/571): Automate APIs generator, switch to @influxdata/oats.
1. [#580](https://github.com/influxdata/influxdb-client-js/pull/580): Repair doc links to point to latest API docs.
1. [#590](https://github.com/influxdata/influxdb-client-js/pull/590): Improve browser example to use configured bucket.

## 1.29.0 [2022-08-25]

### Features

1. [#547](https://github.com/influxdata/influxdb-client-js/pull/547): Improve write retry buffer.

### Other

1. [#511](https://github.com/influxdata/influxdb-client-js/pull/511): Replace rollup with tsup.
1. [#514](https://github.com/influxdata/influxdb-client-js/pull/514): Repair links in generated API documentation.
1. [#516](https://github.com/influxdata/influxdb-client-js/pull/516): Replace ts-node with esbuild-runner.
1. [#518](https://github.com/influxdata/influxdb-client-js/pull/518): Change examples to ES modules.

## 1.28.0 [2022-07-29]

### Features

1. [#460](https://github.com/influxdata/influxdb-client-js/pull/460): Add type definitions for typescript 4.7+.
1. [#469](https://github.com/influxdata/influxdb-client-js/pull/469): Support bigint in flux tagged template.

### Bug Fixes

1. [#468](https://github.com/influxdata/influxdb-client-js/pull/468): Repair sanitizing of number and regexp values.

### Other

1. [#462](https://github.com/influxdata/influxdb-client-js/pull/462): Upgrade to typescript 4.7.
1. [#465](https://github.com/influxdata/influxdb-client-js/pull/465): Upgrade lerna to v5.
1. [#466](https://github.com/influxdata/influxdb-client-js/pull/466): Upgrade prettier to v2.

## 1.27.0 [2022-06-24]

### Features

1. [#449](https://github.com/influxdata/influxdb-client-js/pull/449): Allow to overwrite default write API HTTP path.

### Bug Fixes

1. [#458](https://github.com/influxdata/influxdb-client-js/pull/458): Do not retry write upon 'hinted handoff queue not empty' error.

### Other

1. [#455](https://github.com/influxdata/influxdb-client-js/pull/455): Improve `writeAdvanced.js` example.

## 1.26.0 [2022-05-20]

### Features

1. [#442](https://github.com/influxdata/influxdb-client-js/pull/442): Regenerate APIs from swagger.
1. [#447](https://github.com/influxdata/influxdb-client-js/pull/447): Allow custom transport options in a browser.

### Other

1. [#442](https://github.com/influxdata/influxdb-client-js/pull/442): Demonstrate invokable scripts in `invokableScripts.js` example.

## 1.25.0 [2022-04-19]

### Features

1. [#431](https://github.com/influxdata/influxdb-client-js/pull/431): Regenerate APIs from swagger.
1. [#434](https://github.com/influxdata/influxdb-client-js/pull/434): Support write consistency query parameter.

### Other

1. [#429](https://github.com/influxdata/influxdb-client-js/pull/429): Improve query examples.
1. [#430](https://github.com/influxdata/influxdb-client-js/pull/430): Upgrade dependencies.
1. [#433](https://github.com/influxdata/influxdb-client-js/pull/433): Improve flux function tests.

## 1.24.0 [2022-03-18]

### Features

1. [#416](https://github.com/influxdata/influxdb-client-js/pull/416): Simplify retrieval of particular row values.
1. [#421](https://github.com/influxdata/influxdb-client-js/pull/421): Enhance writeFailed callback.

### CI

1. [#422](https://github.com/influxdata/influxdb-client-js/pull/422): Upgrade development js libraries.
1. [#423](https://github.com/influxdata/influxdb-client-js/pull/423): Upgrade lerna to v4.

## 1.23.0 [2022-02-18]

### Features

1. [#402](https://github.com/influxdata/influxdb-client-js/pull/402): Limit write batch maximum size in bytes.
1. [#403](https://github.com/influxdata/influxdb-client-js/pull/403): Make basic authentication optional in generated APIs.
1. [#412](https://github.com/influxdata/influxdb-client-js/pull/412): Regenerate APIs from swagger.

### Bug Fixes

1. [#401](https://github.com/influxdata/influxdb-client-js/pull/401): Repair handling of gzipped responses.
1. [#405](https://github.com/influxdata/influxdb-client-js/pull/405): Add missing PermissionResources from Cloud API definition
1. [#411](https://github.com/influxdata/influxdb-client-js/pull/411): Make basic authentication optional.

## 1.22.0 [2022-01-20]

### Features

1. [#395](https://github.com/influxdata/influxdb-client-js/pull/395): Allow to add extra HTTP headers.
1. [#395](https://github.com/influxdata/influxdb-client-js/pull/395): Allow to setup HTTP proxy for node.js.
1. [#396](https://github.com/influxdata/influxdb-client-js/pull/396): Regenerate APIs from swagger.

## 1.21.0 [2021-11-26]

### Features

1. [#387](https://github.com/influxdata/influxdb-client-js/pull/387): Add FluxScriptInvocationAPI.
1. [#387](https://github.com/influxdata/influxdb-client-js/pull/387): Add invocableScript.js example.
1. [#390](https://github.com/influxdata/influxdb-client-js/pull/390): Add delete.ts example to show how to delete data from a bucket.

### Bug Fixes

1. [#382](https://github.com/influxdata/influxdb-client-js/pull/382): Rename Logger variable to Log.
1. [#383](https://github.com/influxdata/influxdb-client-js/pull/383): Remove undefined fields from request options.
1. [#386](https://github.com/influxdata/influxdb-client-js/pull/386): Do not parse empty JSON response.
1. [#388](https://github.com/influxdata/influxdb-client-js/pull/388): Point to InfluxDB v2.1 / cloud documentation.
1. [#392](https://github.com/influxdata/influxdb-client-js/pull/392): Repair double-escaping of default tags.

## 1.20.0 [2021-10-26]

### Features

1. [#374](https://github.com/influxdata/influxdb-client-js/pull/374): Add FunctionsAPI.
1. [#374](https://github.com/influxdata/influxdb-client-js/pull/374): Regenerate APIs from swagger.

## 1.19.0 [2021-10-22]

### Bug Fixes

1. [#370](https://github.com/influxdata/influxdb-client-js/pull/370): Throw error when int/uint/float point field is out of range.

## 1.18.0 [2021-09-17]

### Features

1. [#365](https://github.com/influxdata/influxdb-client-js/pull/365): Allow following HTTP redirects in node.js.

### CI

1. [#366](https://github.com/influxdata/influxdb-client-js/pull/366): Switch to next-gen CircleCI's convenience images

## 1.17.0 [2021-08-25]

### Features

1. [#362](https://github.com/influxdata/influxdb-client-js/pull/362): Regenerate APIs from swagger.

### Documentation

1. [#361](https://github.com/influxdata/influxdb-client-js/pull/361): Document how to setup proxy.
1. [#362](https://github.com/influxdata/influxdb-client-js/pull/362): Use ping API in examples.

## 1.16.0 [2021-08-20]

### Features

1. [#346](https://github.com/influxdata/influxdb-client-js/pull/346): Make QueryApi compatible with rxjs7.
1. [#351](https://github.com/influxdata/influxdb-client-js/pull/351): Upgrade to typescript 4.3.5.

### Bug Fixes

1. [#347](https://github.com/influxdata/influxdb-client-js/pull/347): Parse infinite numbers.

### Documentation

1. [#351](https://github.com/influxdata/influxdb-client-js/pull/351): Upgrade api-extractor and api-documenter.
1. [#360](https://github.com/influxdata/influxdb-client-js/pull/360): Clarify node vs browser usage.

## 1.15.0 [2021-07-09]

### Features

1. [#341](https://github.com/influxdata/influxdb-client-js/pull/341): Add uintField fn to `Point`.
1. [#342](https://github.com/influxdata/influxdb-client-js/pull/342): Regenerate APIs from [oss.yml](https://github.com/influxdata/openapi/blob/master/contracts/oss.yml).
1. [#343](https://github.com/influxdata/influxdb-client-js/pull/343): Use exponential random retry strategy when writing data.

## 1.14.0 [2021-06-04]

### Features

1. [#338](https://github.com/influxdata/influxdb-client-js/pull/338): Use nanosecond precision by default in `Point.toLineProtocol()`.

## 1.13.0 [2021-04-30]

### Features

1. [#326](https://github.com/influxdata/influxdb-client-js/pull/326): Apply gzip compression to writes.
1. [#332](https://github.com/influxdata/influxdb-client-js/pull/332): Regenerate APIs from [oss.yml](https://github.com/influxdata/openapi/blob/master/contracts/oss.yml).

### Bug Fixes

1. [#328](https://github.com/influxdata/influxdb-client-js/pull/328): Better Explain Point timestamp.

### Breaking Changes

1. [#326](https://github.com/influxdata/influxdb-client-js/pull/326): Write request to InfluxDB is gzipped
   if the size greater than 1000 bytes, this change optimizes communication with InfluxDB. Whenever required,
   the `gzipThreshold` can be changed in `WriteOptions` during the creation of Write API. The gzip
   compression work fine in the node.js environment, but it does not work OOTB in the browser.
   The browser transport must be customized to do gzip, an example is provided in the `decorateRequest` field of
   [FetchTransport](https://github.com/influxdata/influxdb-client-js/blob/master/packages/core/src/impl/browser/FetchTransport.ts).
1. [#332](https://github.com/influxdata/influxdb-client-js/pull/328): There are a few incompatible changes in the types used by
   `UsersAPI`, it now uses a `UserResponse` type where a `User` type was used before. A `UserResponse` includes all properties of
   a `User` type.

## 1.12.0 [2021-04-01]

### Features

1. [#316](https://github.com/influxdata/influxdb-client-js/pull/316): Regenerate APIs from swagger.

### Bug Fixes

1. [#318](https://github.com/influxdata/influxdb-client-js/pull/318): Support negative numbers in flux tagged template.

## 1.11.0 [2021-03-05]

### Features

1. [#302](https://github.com/influxdata/influxdb-client-js/pull/302): Expose response headers in all APIs.
1. [#302](https://github.com/influxdata/influxdb-client-js/pull/302): Add `tokens.js` example.
1. [#306](https://github.com/influxdata/influxdb-client-js/pull/306): Regenerate APIs from swagger.
1. [#309](https://github.com/influxdata/influxdb-client-js/pull/309): Allow to customize logger.
1. [#313](https://github.com/influxdata/influxdb-client-js/pull/313): Add queryRaw example.

### Bug Fixes

1. [#304](https://github.com/influxdata/influxdb-client-js/pull/304): Use the latest client in query.deno.ts example.
1. [#305](https://github.com/influxdata/influxdb-client-js/pull/305): Remove deprecated zlib constants.

### Documentation

1. [#311](https://github.com/influxdata/influxdb-client-js/pull/311): Upgrade api-extractor and api-documenter.

## 1.10.0 [2021-01-29]

### Features

1. [#296](https://github.com/influxdata/influxdb-client-js/pull/296): Allow to specify escaped field values.
1. [#295](https://github.com/influxdata/influxdb-client-js/pull/295): Regenerate APIs from InfluxDB 2.0.3 swagger.
1. [#298](https://github.com/influxdata/influxdb-client-js/pull/295): Add example node.js application monitoring.

## 1.9.0 [2020-12-04]

### Features

1. [#271](https://github.com/influxdata/influxdb-client-js/pull/271): Introduce `@influxdata/giraffe` package.
1. [#272](https://github.com/influxdata/influxdb-client-js/pull/272): Optimize UTF8 processing in the browser.
1. [#275](https://github.com/influxdata/influxdb-client-js/pull/275): Export CSV results parser.
1. [#275](https://github.com/influxdata/influxdb-client-js/pull/275): Export fuction to transform CSV string to giraffe table.
1. [#275](https://github.com/influxdata/influxdb-client-js/pull/275): Add tree shaking optimizations.
1. [#276](https://github.com/influxdata/influxdb-client-js/pull/276): Allow to notify about write success.
1. [#280](https://github.com/influxdata/influxdb-client-js/pull/280): Upgrade to the latest node v14 LTS.
1. [#283](https://github.com/influxdata/influxdb-client-js/pull/283): Allow to specify custom HTTP headers in WriteApi or QueryApi.
1. [#287](https://github.com/influxdata/influxdb-client-js/pull/287): Throw HttpError with code and message from response body.
1. [#289](https://github.com/influxdata/influxdb-client-js/pull/289): Support `deno`.
1. [#292](https://github.com/influxdata/influxdb-client-js/pull/289): Add query.deno.ts example.

### Breaking Changes

1. [#291](https://github.com/influxdata/influxdb-client-js/pull/291): Remove WritePrecision const enum. A typescript code
   has to be changed to use the precision value directly ('ns' in place of WritePrecision.ns). No changes are required
   for a javascript code or a typescript code that already uses the precision value directly.

## 1.8.0 [2020-10-30]

### Features

1. [#267](https://github.com/influxdata/influxdb-client-js/pull/267): Introduce `@influxdata/influxdb-client-browser` package.

### Bug Fixes

1. [#264](https://github.com/influxdata/influxdb-client-js/pull/264): Require 204 status code in a write response.
1. [#265](https://github.com/influxdata/influxdb-client-js/pull/265): Make QueryApi instance immutable.
1. [#270](https://github.com/influxdata/influxdb-client-js/pull/270): Do not set User-Agent header in browser.

## 1.7.0 [2020-10-02]

### Features

1. [#238](https://github.com/influxdata/influxdb-client-js/pull/238): Respect context path in client's url option.
1. [#240](https://github.com/influxdata/influxdb-client-js/pull/240): Add helpers to let users choose how to deserialize dateTime:RFC3339 query response data type.
1. [#248](https://github.com/influxdata/influxdb-client-js/pull/248): Change default InfluxDB URL to <http://localhost:8086> .
1. [#250](https://github.com/influxdata/influxdb-client-js/pull/250): Simplify precision for WriteApi retrieval.
1. [#253](https://github.com/influxdata/influxdb-client-js/pull/253): Allow to simply receive the whole query response as a string.
1. [#257](https://github.com/influxdata/influxdb-client-js/pull/257): Regenerate APIs from swagger.

### Breaking Changes

1. [#258](https://github.com/influxdata/influxdb-client-js/pull/258): Convert FluxTableColumn and FluxTableMetaData to interface.
   This change is unlikely to cause any harm, since the clients are expected to use only FluxTableColumn/FluxTableMetaData
   fields or methods that didn't change. See [#258](https://github.com/influxdata/influxdb-client-js/pull/258) for details
   and backward compatibility notes.

### Bug Fixes

1. [#237](https://github.com/influxdata/influxdb-client-js/pull/237): Fixed line splitter of query results that might have produced wrong results for query responses with quoted data.
1. [#242](https://github.com/influxdata/influxdb-client-js/pull/242): Repair escaping of backslash in line protocol string field.
1. [#246](https://github.com/influxdata/influxdb-client-js/pull/246): Throw error on attempt to write points using a closed WriteApi instance.
1. [#252](https://github.com/influxdata/influxdb-client-js/pull/252): Repair nesting of flux expressions.
1. [#259](https://github.com/influxdata/influxdb-client-js/pull/259): Finish query when cancelled by the user.

## 1.6.0 [2020-08-14]

### Features

1. [#219](https://github.com/influxdata/influxdb-client-js/pull/219): Sanitize arrays in parameterized flux queries.
1. [#226](https://github.com/influxdata/influxdb-client-js/pull/226): Improve retry strategy.
1. [#231](https://github.com/influxdata/influxdb-client-js/pull/231): Regenerate APIs from swagger.
1. [#233](https://github.com/influxdata/influxdb-client-js/pull/233): Unify default retry strategy settings across all InfluxDB v2 clients.
1. [#234](https://github.com/influxdata/influxdb-client-js/pull/234): Upgrade dependencies.

### Breaking Changes

1. [#227](https://github.com/influxdata/influxdb-client-js/pull/227): Change default number serializers to return null when no value is found.
   This change affects the output of `tableMeta.toObject(row)`, see [#227](https://github.com/influxdata/influxdb-client-js/pull/227) for details and backward compatibility notes.

### Documentation

1. [#215](https://github.com/influxdata/influxdb-client-js/pull/215): Add createBucket.js example.
1. [#218](https://github.com/influxdata/influxdb-client-js/pull/218): Add default documentation to body property in generated APIs.
1. [#220](https://github.com/influxdata/influxdb-client-js/pull/220): Generate API constructor with InfluxDB parameter.
1. [#222](https://github.com/influxdata/influxdb-client-js/pull/222): Improve and validate code documentation.
1. [#224](https://github.com/influxdata/influxdb-client-js/pull/224): Generate API documentation for gh-pages.
1. [#224](https://github.com/influxdata/influxdb-client-js/pull/224): Include doc generation into CI and release process.
1. [#229](https://github.com/influxdata/influxdb-client-js/pull/229): Add writeAdvanced.js example.

## 1.5.0 [2020-07-17]

### Features

1. [#204](https://github.com/influxdata/influxdb-client-js/pull/204): Allow to supply default tags in WriteOptions.
1. [#209](https://github.com/influxdata/influxdb-client-js/pull/209): Better report errors when InfluxDB 1.8 returns empty body

### Documentation

1. [#207](https://github.com/influxdata/influxdb-client-js/pull/207): Explain the significance of the precision argument in write example.

### Bug Fixes

1. [#205](https://github.com/influxdata/influxdb-client-js/pull/205): Fixed serialization of `\n`, `\r` and `\t` to Line Protocol

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
