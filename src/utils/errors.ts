export class CancellationError extends Error {
  constructor(...args: any[]) {
    super(...args)

    this.name = 'CancellationError'
  }
}

export class LargeResponseError extends Error {
  constructor(...args: any[]) {
    super(...args)

    this.name = 'LargeResponseError'
    this.message = 'Flux response is too large'
  }
}
