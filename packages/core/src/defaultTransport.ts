import {ClientOptions} from '.'
import {Transport} from './transport'
import NodeHttpTransport from './impl/node/NodeHttpTransport'

/**
 * Creates default transport using the connection options supplied.
 */
export function createTransport(options: ClientOptions): Transport {
  return options.transport || new NodeHttpTransport(options)
}
