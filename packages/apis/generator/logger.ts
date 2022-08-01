/* eslint-disable no-console */
const logger = {
  warn(message: string, ...otherParameters: any[]): void {
    message = `\u001b[33m${message}\u001b[0m` // wrap to yellow
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
