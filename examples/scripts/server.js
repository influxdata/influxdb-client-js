import * as express from 'express'
import * as path from 'path'
import * as proxy from 'express-http-proxy'
import * as open from 'open'
import {url as influxDBUrl} from '../env'

const port = 3001

const app = express()
// serve all files of the git repository
app.use(express.static(path.join(__dirname, '..', '..'), {index: false}))
app.use(
  '/api',
  proxy(influxDBUrl + '/api', {
    proxyReqPathResolver: function(req) {
      return '/api' + req.url
    },
  })
)
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`opening http://localhost:${port}/examples/index.html`)
  open(`http://localhost:${port}/examples/index.html`)
})
