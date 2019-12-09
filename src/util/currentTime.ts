import {WritePrecission} from '../options'

declare let process: any
const zeroPadding = '000000000'
let useHrTime: boolean = false

export function useProcessHrtime(use: boolean): boolean {
  return (useHrTime = use && process && typeof process.hrtime === 'function')
}
useProcessHrtime(true) // preffer node

let nanos: () => string = () => {
  if (useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    const nanos = String(hrTime[1] % 1000000)
    return String(Date.now()) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  } else {
    return String(Date.now()) + zeroPadding.substr(0, 6)
  }
}

const micros: () => string = () => {
  if (useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    const micros = String(Math.trunc(hrTime[1] / 1000) % 1000)
    return (
      String(Date.now()) + zeroPadding.substr(0, 3 - micros.length) + micros
    )
  } else {
    return String(Date.now()) + zeroPadding.substr(0, 3)
  }
}
const millis: () => string = () => String(Date.now())
const seconds: () => string = () => String(Math.floor(Date.now() / 1000))

export const currentTimes = Object.freeze({
  [String(WritePrecission.s)]: seconds,
  [String(WritePrecission.ms)]: millis,
  [String(WritePrecission.us)]: micros,
  [String(WritePrecission.ns)]: nanos,
  seconds,
  millis,
  micros,
  nanos,
})
