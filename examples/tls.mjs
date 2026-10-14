#!/usr/bin/env node
///////////////////////////////////////////////////////////////////////////////////
// Shows how to configure InfluxDB node.js client with TLS / mutual TLS (mTLS).  //
///////////////////////////////////////////////////////////////////////////////////

import {InfluxDB, Point} from '@influxdata/influxdb-client'
import {bucket, org, token, url} from './env.mjs'
import {existsSync, readFileSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {join} from 'node:path'

const defaultCertsDir = fileURLToPath(
  new URL('../packages/core/test/certificates', import.meta.url)
)

const serverCaPath =
  process.env['INFLUX_CA_PATH'] || join(defaultCertsDir, 'influxdb.crt')
const clientCertPath =
  process.env['INFLUX_CLIENT_CERT_PATH'] ||
  join(defaultCertsDir, 'client.crt')
const clientKeyPath =
  process.env['INFLUX_CLIENT_KEY_PATH'] ||
  join(defaultCertsDir, 'client.key')
const hasConfiguredClientPem =
  process.env['INFLUX_CLIENT_CERT_PATH'] && process.env['INFLUX_CLIENT_KEY_PATH']
const clientP12Path =
  process.env['INFLUX_CLIENT_P12_PATH'] ||
  join(defaultCertsDir, 'client.p12')
const clientP12Password =
  process.env['INFLUX_CLIENT_P12_PASSWORD'] || 'changeit'

if (new URL(url).protocol !== 'https:') {
  throw new Error(
    'Set INFLUX_URL to an https:// URL to run the TLS/mTLS example.'
  )
}

console.log('*** TLS / mTLS CONFIGURATION EXAMPLES ***')

/**
 * 1. Standard TLS with custom / self-signed CA certificate
 *
 * When your InfluxDB instance uses HTTPS with a private CA or self-signed certificate,
 * supply the CA certificate in `transportOptions.ca` so the client can verify the server.
 */
function createTlsClient(caPath) {
  return new InfluxDB({
    url,
    token,
    transportOptions: {
      ca: readFileSync(caPath),
      // Optional: rejectUnauthorized defaults to true.
      // rejectUnauthorized: true,
    },
  })
}

/**
 * 2. Mutual TLS (mTLS) with client certificate and private key (.crt / .key)
 *
 * When your InfluxDB server or reverse proxy requires client certificate authentication,
 * provide `ca` (to verify the server), `cert` (client certificate), and `key` (client private key).
 */
function createMtlsClient(caPath, certPath, keyPath) {
  return new InfluxDB({
    url,
    token,
    transportOptions: {
      ca: readFileSync(caPath),
      cert: readFileSync(certPath),
      key: readFileSync(keyPath),
      // Optional: passphrase if the private key is encrypted
      // passphrase: 'your-passphrase',
      // Optional: rejectUnauthorized defaults to true
      // rejectUnauthorized: true,
    },
  })
}

/**
 * 3. Mutual TLS (mTLS) with PKCS#12 bundle (.p12 / .pfx)
 *
 * When your client certificate and private key are bundled in a PKCS#12 (.p12 / .pfx) file,
 * provide `ca` (to verify the server), `pfx` (client PKCS#12 bundle), and `passphrase`.
 * For example, using `client.p12` with the passphrase 'changeit' from packages/core/test/certificates.
 */
function createMtlsP12Client(caPath, p12Path, passphrase = 'changeit') {
  return new InfluxDB({
    url,
    token,
    transportOptions: {
      ca: readFileSync(caPath),
      pfx: readFileSync(p12Path),
      passphrase,
      // Optional: rejectUnauthorized defaults to true
      // rejectUnauthorized: true,
    },
  })
}

// Example execution (when certificate files exist):
if (
  existsSync(serverCaPath) &&
  !hasConfiguredClientPem &&
  existsSync(clientP12Path)
) {
  const influxDB = createMtlsP12Client(
    serverCaPath,
    clientP12Path,
    clientP12Password
  )
  const writeApi = influxDB.getWriteApi(org, bucket, 'ns')
  const point = new Point('measurement').floatField('value', 10.5)
  writeApi.writePoint(point)
  try {
    await writeApi.close()
    console.log('Write with mTLS (.p12) SUCCESS')
  } catch (e) {
    console.error('Write with mTLS (.p12) failed:', e)
  }
} else if (
  existsSync(serverCaPath) &&
  existsSync(clientCertPath) &&
  existsSync(clientKeyPath)
) {
  const influxDB = createMtlsClient(serverCaPath, clientCertPath, clientKeyPath)
  const writeApi = influxDB.getWriteApi(org, bucket, 'ns')
  const point = new Point('measurement').floatField('value', 10.5)
  writeApi.writePoint(point)
  try {
    await writeApi.close()
    console.log('Write with mTLS SUCCESS')
  } catch (e) {
    console.error('Write with mTLS failed:', e)
  }
} else if (existsSync(serverCaPath)) {
  const influxDB = createTlsClient(serverCaPath)
  const writeApi = influxDB.getWriteApi(org, bucket, 'ns')
  const point = new Point('measurement').floatField('value', 10.5)
  writeApi.writePoint(point)
  try {
    await writeApi.close()
    console.log('Write with TLS SUCCESS')
  } catch (e) {
    console.error('Write with TLS failed:', e)
  }
} else {
  console.log(
    'Certificate files not found at specified paths. Set INFLUX_CA_PATH, INFLUX_CLIENT_CERT_PATH, INFLUX_CLIENT_KEY_PATH, or INFLUX_CLIENT_P12_PATH environment variables to run against a real server.'
  )
}

export {createTlsClient, createMtlsClient, createMtlsP12Client}
