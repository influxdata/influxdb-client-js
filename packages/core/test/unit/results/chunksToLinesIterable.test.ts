import {expect} from 'chai'
import {ChunkCombiner, chunksToLinesIterable} from '../../../src/results'
import chunksToLinesTables from '../../fixture/chunksToLinesTables.json'
import nodeChunkCombiner from '../../../src/impl/node/nodeChunkCombiner'
import {Buffer} from 'buffer'

interface ChunkTest {
  name: string
  chunks: string[]
  lines: string[]
  withCancellable?: boolean // use observer with cancellable implementation
}

describe('chunksToLines', () => {
  const combiners: Array<{name: string; value?: ChunkCombiner}> = [
    {name: 'default', value: undefined as undefined},
    {name: 'nodeChunkCombiner', value: nodeChunkCombiner},
  ]
  combiners.forEach(({name, value: combiner}) => {
    describe(`with ${name} chunk combiner`, () => {
      ;(chunksToLinesTables as Array<ChunkTest>).forEach((test: ChunkTest) => {
        it(`iterates correct lines from test set '${test.name}'`, async () => {
          let error = false
          const source = async function* (): AsyncIterableIterator<Uint8Array> {
            for (let i = 0; i < test.chunks.length; i++) {
              const chunk = test.chunks[i]
              if (chunk === 'error') {
                error = true
                throw new Error()
              } else {
                yield Buffer.from(chunk, 'utf8')
              }
            }
          }
          const lines = []
          let failed = false
          try {
            for await (const line of chunksToLinesIterable(
              source(),
              combiner
            )) {
              lines.push(line)
            }
          } catch (e) {
            failed = true
          }
          expect(test.lines).deep.equal(lines)
          expect(error).equal(failed)
        })
      })
    })
  })
})
