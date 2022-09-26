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
  it('can pause and resume processing', () => {
    let lines: string[] = []
    let chunksResume = sinon.spy((): void => {})
    const target = {
      next(line: string): boolean {
        lines.push(line)
        const paused = line.includes('pause')
        return !paused
      },
      error: sinon.fake(),
      complete: sinon.fake(),
      useResume: sinon.spy((_x: () => void): void => {}),
    }
    const subject = chunksToLines(target, nodeChunkCombiner)
    let nextVal = subject.next(Buffer.from('a\npause\nb\nd', 'utf8'))
    subject?.useResume?.((chunksResume = sinon.spy((): void => {})))
    expect(nextVal).equals(false)
    expect(lines).deep.equals(['a', 'pause'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(1)
    expect(chunksResume.callCount).equals(0)
    target.useResume.args[0][0]() // resume
    expect(lines).deep.equals(['a', 'pause', 'b'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(1)
    expect(chunksResume.callCount).equals(1)
    lines = []
    nextVal = subject.next(Buffer.from('pause\npause\nf', 'utf8'))
    expect(nextVal).equals(false)
    subject?.useResume?.((chunksResume = sinon.spy((): void => {})))
    expect(lines).deep.equals(['dpause'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(2)
    expect(chunksResume.callCount).equals(0)
    target.useResume.args[1][0]() // resume
    expect(lines).deep.equals(['dpause', 'pause'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(3)
    expect(chunksResume.callCount).equals(0)
    target.useResume.args[2][0]() // resume
    expect(lines).deep.equals(['dpause', 'pause'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(3)
    expect(chunksResume.callCount).equals(1)
    subject.complete()
    expect(lines).deep.equals(['dpause', 'pause', 'f'])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(1)
    expect(target.useResume.callCount).equals(3)
  })
  it('requires useResume', () => {
    const lines: string[] = []
    const target = {
      next(line: string): boolean {
        lines.push(line)
        const paused = line.includes('pause')
        return !paused
      },
      error: sinon.fake(),
      complete: sinon.fake(),
    }
    const subject = chunksToLines(target, nodeChunkCombiner)
    const nextVal = subject.next(Buffer.from('a\npause\nb\nd', 'utf8'))
    expect(nextVal).equals(true)
    expect(lines).deep.equals(['a', 'pause'])
    expect(target.error.callCount).equals(1)
    expect(target.complete.callCount).equals(0)
    subject.next(Buffer.from('whatever'))
    subject.complete()
    expect(lines).deep.equals(['a', 'pause'])
    expect(target.error.callCount).equals(1)
    expect(target.complete.callCount).equals(0)
  })
})
