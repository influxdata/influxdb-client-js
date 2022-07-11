import {expect} from 'chai'
import {chunksToLines, Cancellable} from '../../../src/results'
import chunksToLinesTables from '../../fixture/chunksToLinesTables.json'
import sinon from 'sinon'
import {CollectLinesObserver} from '../util/CollectLinesObserver'
import nodeChunkCombiner from '../../../src/impl/node/nodeChunkCombiner'
import {Buffer} from 'buffer'

interface ChunkTest {
  name: string
  chunks: string[]
  lines: string[]
  withCancellable?: boolean // use observer with cancellable implementation
}

class CollectLinesObserver2 extends CollectLinesObserver {
  useCancellable(_cancellable: Cancellable): void {
    this.cancellableSet = true
  }
}

describe('chunksToLines', () => {
  ;(chunksToLinesTables as Array<ChunkTest>).forEach((test: ChunkTest) => {
    it(`creates correct lines from test set '${test.name}'`, () => {
      const target = test.withCancellable
        ? new CollectLinesObserver2()
        : new CollectLinesObserver()
      const subject = chunksToLines(target, nodeChunkCombiner)
      subject.useCancellable?.({
        isCancelled: sinon.mock(),
        cancel: sinon.mock(),
      })
      let failed = false
      for (let i = 0; i < test.chunks.length; i++) {
        const chunk = test.chunks[i]
        if (chunk === 'error') {
          failed = true
          subject.error(new Error())
        } else {
          // eslint-disable-next-line no-undef
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
    const subject = chunksToLines(target, nodeChunkCombiner)
    subject.next(Buffer.from('abcd', 'utf8'))
    subject.next(1 as any as Uint8Array)
    expect(target.failed).to.be.equal(1)
  })
  it('do not emit lines after being cancelled', () => {
    let cancellable: Cancellable | undefined = undefined
    const lines: string[] = []
    const target = {
      next(line: string): void {
        if (line === 'cancel') {
          cancellable?.cancel()
        } else {
          lines.push(line)
        }
      },
      error: sinon.fake(),
      complete: sinon.fake(),
      useCancellable(c: Cancellable): void {
        cancellable = c
      },
    }
    const subject = chunksToLines(target, nodeChunkCombiner)
    const cancel = sinon.mock()
    subject.useCancellable?.({
      isCancelled: () => cancel.callCount > 0,
      cancel,
    })
    subject.next(Buffer.from('a\ncancel\nc\nd', 'utf8'))
    subject.next(Buffer.from('gh', 'utf8'))
    expect(lines).deep.equals(['a'])
    expect(target.error.callCount).equals(0)
    expect((cancellable as any)?.isCancelled()).equals(true)
    expect(target.complete.callCount).equals(1)
  })
})
