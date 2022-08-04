/*
 * The following configuration is used in the browser example.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: '/influx', //'http://localhost:8086',
  /** InfluxDB authorization token */
  token: 'my-token',
  /** InfluxDB organization */
  org: 'my-org',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: 'my-bucket',

  /** The following properties are used ONLY in the onboarding example */
  /** InfluxDB user  */
  username: 'my-user',
  /** InfluxDB password  */
  password: 'my-password',
}
