import {expect} from 'chai'
import {setLogger} from '../src/util/logger'
import https from 'https'
import {AddressInfo} from 'net'
import path from 'path'
import fs from 'fs'

let previous: any

export interface CollectedLogs {
  error: Array<Array<any>>
  warn: Array<Array<any>>
}

export const collectLogging = {
  replace(): CollectedLogs {
    const retVal: CollectedLogs = {
      error: [],
      warn: [],
    }
    previous = setLogger({
      error: function (...args) {
        retVal.error.push(args)
      },
      warn: function (...args) {
        retVal.warn.push(args)
      },
    })
    return retVal
  },
  decorate(): CollectedLogs {
    const retVal: CollectedLogs = {
      error: [],
      warn: [],
    }
    const previous = setLogger({
      error: function (...args) {
        ;(previous.error as any).apply(previous, args)
        retVal.error.push(args)
      },
      warn: function (...args) {
        ;(previous.warn as any).apply(previous, args)
        retVal.warn.push(args)
      },
    })
    return retVal
  },
  after(): void {
    if (previous) {
      setLogger(previous)
      previous = undefined
    }
  },
}

let rejections: Array<any> = []
function addRejection(e: any) {
  rejections.push(e)
}

/**
 * Used by unit tests to check that no unhandled promise rejection occurs.
 */
export const unhandledRejections = {
  before(): void {
    rejections = []
    process.on('unhandledRejection', addRejection)
  },
  after(): void {
    process.off('unhandledRejection', addRejection)
    expect(rejections, 'Unhandled Promise rejections detected').deep.equals([])
  },
}

export const startHttpsServer = (
  options: https.ServerOptions
): Promise<{server: https.Server; port: number}> => {
  return new Promise((resolve, reject) => {
    const server = https.createServer(options, (_req, res) => {
      res.writeHead(200, {'content-type': 'text/plain'})
      res.end('Success')
    })
    server.on('error', reject)
    server.listen(0, () => {
      const addr = server.address() as AddressInfo
      resolve({server, port: addr.port})
    })
  })
}

export const stopHttpsServer = async (server?: https.Server): Promise<void> => {
  if (!server) return
  return new Promise((resolve) => server.close(() => resolve()))
}

export const certsDir = ((): string => {
  let dir = __dirname
  while (dir !== path.dirname(dir)) {
    const candidate = path.join(dir, 'test/certificates')
    if (fs.existsSync(candidate)) return candidate
    const candidate2 = path.join(dir, 'certificates')
    if (fs.existsSync(candidate2)) return candidate2
    dir = path.dirname(dir)
  }
  return path.join(__dirname, 'certificates')
})()
export const serverCert = path.join(certsDir, 'influxdb.crt')
export const serverKey = path.join(certsDir, 'influxdb.key')
export const serverP12 = path.join(certsDir, 'influxdb.p12')

export const otherServerCert = path.join(certsDir, 'other-server.crt')
export const otherServerKey = path.join(certsDir, 'other-server.key')
export const otherServerP12 = path.join(certsDir, 'other-server.p12')

export const clientCert = path.join(certsDir, 'client.crt')
export const clientKey = path.join(certsDir, 'client.key')
export const clientP12 = path.join(certsDir, 'client.p12')

export const p12Password = 'changeit'
