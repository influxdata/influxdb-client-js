import {expect} from 'chai'
import fs from 'fs'
import {CollectTablesObserver} from '../util/CollectTablesObserver'
import {
  chunksToLines,
  createTextDecoderCombiner,
  linesToTables,
} from '../../../src/results'
import sinon from 'sinon'

describe('linesToTables', () => {
  const chunkCombiner = createTextDecoderCombiner()
  it('parses tables', async () => {
    const data = fs.readFileSync('test/fixture/query/response2.txt')
    const response = JSON.parse(
      fs.readFileSync('test/fixture/query/response2.parsed.json', 'utf8')
    )
    const target = new CollectTablesObserver()
    const lineObserver = linesToTables(target)
    const input = chunksToLines(lineObserver, chunkCombiner)
    input.next(data)
    expect(target.completed).equals(0)
    expect(target.tables).deep.equal(response.tables)
    input.complete()
    expect(target.rows).deep.equal(response.rows)
    expect(target.completed).equals(1)
  })
  it('notifies about errors', async () => {
    const target = new CollectTablesObserver()
    ;(target as any).useCancellable = (_x: any): void => {}

    const lineObserver = linesToTables(target)
    const input = chunksToLines(lineObserver)
    input.useCancellable?.({
      cancel(): void {},
      isCancelled(): boolean {
        return false
      },
    })
    input.error(new Error())
    expect(target.failed).equals(1)
  })
  it('can pause and resume processing', () => {
    const rows: string[][] = []
    let chunksResume = sinon.spy((): void => {})
    const target = {
      next(row: string[]): boolean {
        rows.push(row)
        const paused = row[0].includes('pause')
        return !paused
      },
      error: sinon.fake(),
      complete: sinon.fake(),
      useResume: sinon.spy((_x: () => void): void => {}),
    }
    const subject = linesToTables(target)
    let nextVal = subject.next('a,b\n')
    expect(nextVal).equals(true)
    nextVal = subject.next('pause,1')
    expect(nextVal).equals(false)
    subject?.useResume?.((chunksResume = sinon.spy((): void => {})))
    expect(nextVal).equals(false)
    expect(rows).deep.equals([['pause', '1']])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(0)
    expect(target.useResume.callCount).equals(1)
    expect(chunksResume.callCount).equals(0)
    target.useResume.args[0][0]() // resume
    expect(chunksResume.callCount).equals(1)
    subject.next('ok,2')
    subject.complete()
    expect(rows).deep.equals([
      ['pause', '1'],
      ['ok', '2'],
    ])
    expect(target.error.callCount).equals(0)
    expect(target.complete.callCount).equals(1)
  })
})
