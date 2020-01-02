import {ChunkCombiner} from '../transport'
import {Buffer} from 'buffer'

const nodeChunkCombiner: ChunkCombiner = {
  concat(first: Uint8Array, second: Uint8Array): Uint8Array {
    return Buffer.concat([first, second])
  },
  toUtf8String(chunk: Uint8Array, start?: number, end?: number): string {
    return (chunk as Buffer).toString('utf-8', start, end)
  },
  copy(chunk: Uint8Array): Uint8Array {
    const retVal = Buffer.allocUnsafe(chunk.length)
    ;(chunk as Buffer).copy(retVal, 0, 0, chunk.length)
    return retVal
  },
}

export default nodeChunkCombiner
