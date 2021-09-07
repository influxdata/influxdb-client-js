#!/usr/bin/env node
/////////////////////////////////////////////////////////////////////////
// Shows how to configure InfluxDB node.js client to follow redirects. //
/////////////////////////////////////////////////////////////////////////

const {url: targetUrl, token, org} = require('./env')
// const {InfluxDB} = require('@influxdata/influxdb-client')
const {InfluxDB} = require('../packages/core')

// start a simple HTTP server that always redirects to a configured InfluxDB
const http = require('http')
const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`)
  console.info(`Redirecting ${req.method} ${reqUrl} to ${targetUrl + req.url}`)
  res.writeHead(307, {location: targetUrl + req.url})
  res.end()
})
server.listen(0, 'localhost', () => {
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
      'follow-redirects': require('follow-redirects'),
    },
  }).getQueryApi(org)
  queryApi
    .collectRows('buckets()')
    .then(data => {
      console.info('Available buckets:')
      data.forEach(x => console.info('', x.name))
      console.log('\nQuery SUCCESS')
    })
    .catch(error => {
      console.error(error)
      console.log('\nQuery ERROR')
    })
    .finally(() => {
      server.close()
    })
})
