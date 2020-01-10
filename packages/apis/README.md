# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.0

## Re-generate APIs code

- update local resources/swagger.yml to the latest version
  - `wget -O resources/swagger.yml https://raw.githubusercontent.com/influxdata/influxdb/master/http/swagger.yml`
- re-generate src/generated/types.ts and resources/operations.json
  - `rm -rf src/generated/*.ts`
  - `oats -i 'types' --storeOperations resources/operations.json resources/swagger.yml > src/generated/types.ts`
- generate src/generated APIs from resources/operations.json
  - `yarn generate`
- validate
  - `yarn test`

## Usage

See [Examples](../../examples/README.md)

## Build

```bash
$ yarn build
```
