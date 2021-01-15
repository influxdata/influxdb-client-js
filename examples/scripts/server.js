const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')
const open = require('open')
const {url} = require('../env')
const monitor = require('./monitor')

const port = 3001
const proxyPath = '/influx'

const app = express()
// monitor express response time in InfluxDB
monitor(app)
// serve all files of the git repository
app.use(express.static(path.join(__dirname, '..', '..'), {index: false}))
// create also proxy to InfluxDB
app.use(proxyPath, proxy(url))
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`forwarding ${proxyPath}/* to ${url}/*`)
  console.log(`opening http://localhost:${port}/examples/index.html`)
  open(`http://localhost:${port}/examples/index.html`)
})
