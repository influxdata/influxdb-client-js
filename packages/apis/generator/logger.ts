import chalk from 'chalk'

/* eslint-disable no-console */
const logger = {
  warn(message: string, ...otherParameters: any[]): void {
    message = chalk.yellow(message)
    if (otherParameters.length) {
      console.warn(message, ...otherParameters)
    } else {
      console.warn(message)
    }
  },
  info(message: string, ...otherParameters: any[]): void {
    console.info(message, ...otherParameters)
  },
}

export default logger
