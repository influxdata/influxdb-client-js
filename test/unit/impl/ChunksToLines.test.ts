import {expect} from 'chai'
import ChunksToLines from '../../../src/impl/ChunksToLines'
import chunksToLinesTables from '../../fixture/chunksToLinesTables.json'
import Cancellable from '../../../src/util/Cancellable'
import sinon from 'sinon'
import {CollectLinesObserver} from '../util/CollectLinesObserver'

interface ChunkTest {
  name: string
  chunks: string[]
  lines: string[]
  withCancellable?: boolean // use observer with cancellable implementation
}

class CollectLinesObserver2 extends CollectLinesObserver {
  useCancellable(cancellable: Cancellable): void {
    this.cancellableSet = true
  }
}

describe('ChunksToLines', () => {
  ;(chunksToLinesTables as Array<ChunkTest>).forEach((test: ChunkTest) => {
    it(`creates correct lines from test set '${test.name}'`, () => {
      const target = test.withCancellable
        ? new CollectLinesObserver2()
        : new CollectLinesObserver()
      const subject = new ChunksToLines(target)
      subject.useCancellable({isCancelled: sinon.mock(), cancel: sinon.mock()})
      let failed = false
      for (let i = 0; i < test.chunks.length; i++) {
        const chunk = test.chunks[i]
        if (chunk === 'error') {
          failed = true
          subject.error(new Error())
        } else {
          subject.next(Buffer.from(chunk, 'utf8'))
          if (failed) {
            subject.error(new Error())
          }
        }
      }
      subject.complete()
      expect(test.lines).deep.equal(target.lines)
      expect(target.cancellableSet).equal(!!test.withCancellable)
      expect(target.failed).equal(failed ? 1 : 0)
      expect(target.completed).equal(failed ? 0 : 1)
    })
  })
  it('fails on unsupported data', () => {
    const target = new CollectLinesObserver()
    const subject = new ChunksToLines(target)
    subject.next(1)
    expect(target.failed).to.be.equal(1)
  })
})
