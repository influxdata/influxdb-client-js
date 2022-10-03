import {expect} from 'chai'
import fs from 'fs'
import {
  chunksToLinesIterable,
  FluxTableMetaData,
  linesToRowsIterable,
} from '../../../src/results'

describe('linesToRowsIterable', () => {
  it('iterates rows', async () => {
    const data = fs.readFileSync('test/fixture/query/response2.txt')
    const chunkSource = async function* () {
      yield data
    }
    const response = JSON.parse(
      fs.readFileSync('test/fixture/query/response2.parsed.json', 'utf8')
    )
    let index = 0
    let lastMeta: FluxTableMetaData | undefined = undefined
    const tables: Array<{index: number; meta: FluxTableMetaData}> = []
    const rows: Array<{index: number; row: string[]}> = []
    for await (const {values, tableMeta} of linesToRowsIterable(
      chunksToLinesIterable(chunkSource())
    )) {
      if (lastMeta !== tableMeta) {
        tables.push({index: index++, meta: tableMeta})
        lastMeta = tableMeta
      }
      rows.push({index: index++, row: values})
    }
    expect(tables).deep.equal(response.tables)
    expect(rows).deep.equal(response.rows)
  })
  it('iterates rows without table annotations', async () => {
    const chunkSource = async function* () {
      yield Buffer.from('a,b\n1,2\n3,4')
    }
    let lastMeta: FluxTableMetaData | undefined = undefined
    const rows: Array<string[]> = []
    for await (const {values, tableMeta} of linesToRowsIterable(
      chunksToLinesIterable(chunkSource())
    )) {
      if (lastMeta !== undefined && lastMeta !== tableMeta) {
        expect.fail('only one metadata expected')
      }
      lastMeta = tableMeta
      rows.push(values)
    }
    expect(rows).deep.equal([
      ['1', '2'],
      ['3', '4'],
    ])
    expect(lastMeta).deep.equal({
      columns: [
        {
          index: 0,
          label: 'a',
        },
        {
          index: 1,
          label: 'b',
        },
      ],
    })
  })
})
