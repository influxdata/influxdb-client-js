import {expect} from 'chai'
import fs from 'fs'
import {CollectTablesObserver} from '../util/CollectTablesObserver'
import {
  chunksToLines,
  createTextDecoderCombiner,
  linesToTables,
} from '../../../src/results'

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
})
