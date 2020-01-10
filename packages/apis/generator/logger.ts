import {yellow} from 'chalk'

/* eslint-disable no-console */
const logger = {
  warn(message: string, ...otherParameters: any[]): void {
    message = yellow(message)
    if (otherParameters && otherParameters.length) {
      console.warn(message)
    } else {
      console.warn(message, ...otherParameters)
    }
  },
  info(message: string, ...otherParameters: any[]): void {
    if (otherParameters && otherParameters.length) {
      console.info(message)
    } else {
      console.info(message, ...otherParameters)
    }
  },
}

export default logger
