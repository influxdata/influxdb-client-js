import express from 'express'
import proxy from 'express-http-proxy'
import open from 'open'
import {url} from '../env.mjs'
import monitor from './monitor.mjs'

const port = 3001
const proxyPath = '/influx'

const app = express()
// monitor express response time in InfluxDB
monitor(app)
// serve all files of the git repository
const dirName = new URL('../..', import.meta.url).pathname
app.use(express.static(dirName, {index: false}))
// create also proxy to InfluxDB
app.use(proxyPath, proxy(url))
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`forwarding ${proxyPath}/* to ${url}/*`)
  console.log(`opening http://localhost:${port}/examples/index.html`)
  open(`http://localhost:${port}/examples/index.html`)
})
