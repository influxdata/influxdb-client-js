#!/usr/bin/env node
/////////////////////////////////////////////////////////////////////////
// Shows how to configure InfluxDB node.js client to follow redirects. //
/////////////////////////////////////////////////////////////////////////

import {url as targetUrl, token, org} from './env.mjs'
import {InfluxDB} from '@influxdata/influxdb-client'
import {createServer} from 'node:http'
import followRedirects from 'follow-redirects'

// start a simple HTTP server that always redirects to a configured InfluxDB
const server = createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`)
  console.info(`Redirecting ${req.method} ${reqUrl} to ${targetUrl + req.url}`)
  res.writeHead(307, {location: targetUrl + req.url})
  res.end()
})
server.listen(0, 'localhost', async () => {
  const addressInfo = server.address()
  console.info('Redirection HTTP server started:', addressInfo)

  const url = `http://localhost:${addressInfo.port}`
  console.info('Executing buckets() query against InfluxDB at', url)
  const queryApi = new InfluxDB({
    url,
    token,
    transportOptions: {
      // The following transport option is required in order to follow HTTP redirects in node.js.
      // Browsers and deno follow redirects OOTB.
      'follow-redirects': followRedirects,
      beforeRedirect: (options, _response, request) => {
        // setup Authorization header for a redirected message,
        // authorization and cookie headers are removed by follow-redirects
        if (request.headers.authorization) {
          options.headers.authorization = request.headers.authorization
        }
      },
    },
  }).getQueryApi(org)
  try {
    const data = await queryApi.collectRows('buckets()', (values, tableMeta) =>
      tableMeta.get(values, 'name')
    )
    console.info('Available buckets:')
    data.forEach((name) => console.info('', name))
    console.log('\nQuery SUCCESS')
  } catch (e) {
    console.error(e)
    console.log('\nQuery ERROR')
  } finally {
    server.close()
  }
})
