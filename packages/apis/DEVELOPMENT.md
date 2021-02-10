# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.0. See https://github.com/influxdata/influxdb-client-js to know more.

## Build

```bash
$ yarn build
```

## Re-generate APIs code

- update local resources/swagger.yml to the latest version
  - `wget -O resources/swagger.yml https://raw.githubusercontent.com/influxdata/influxdb/master/http/swagger.yml`
- re-generate src/generated/types.ts and resources/operations.json using [oats](https://github.com/bonitoo/oats)
  - `rm -rf src/generated/*.ts`
  - `oats -i 'types' --storeOperations resources/operations.json resources/swagger.yml > src/generated/types.ts`
- generate src/generated APIs from resources/operations.json
  - `yarn generate`
- validate
  - `yarn test`
