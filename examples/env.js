/** InfluxDB v2 URL */
const url = process.env['INFLUXDB_URL'] || 'http://localhost:9999'
/** InfluxDB authorization token */
const token = process.env['INFLUXDB_TOKEN'] || 'my-token'
/** Organization within InfluxDB URL  */
const org = 'my-org'
/**InfluxDB bucket used in examples  */
const bucket = 'my-bucket'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'my-user'
/**InfluxDB password  */
const password = 'my-password'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
}
