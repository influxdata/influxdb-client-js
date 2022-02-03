# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.1. See https://github.com/influxdata/influxdb-client-js to know more.

## Build

```bash
$ yarn build
```

## Re-generate APIs code

- fetch latest versions of openapi files
  - `yarn fetchSwaggerFiles`
- re-generate src/generated/types.ts and resources/operations.json using [oats](https://github.com/bonitoo-io/oats)
  - `rm -rf src/generated/*.ts`
  - `oats -i 'types' --storeOperations resources/operations.json --patchScript $PWD/scripts/patchSwagger.js resources/oss.yml resources/invocable-scripts.yml > src/generated/types.ts`
- generate src/generated APIs from resources/operations.json
  - `yarn generate`
- validate
  - `yarn test`
