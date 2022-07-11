import {expect} from 'chai'
import {stringToLines} from '../../../src/results'
import {CollectLinesObserver} from '../util/CollectLinesObserver'
import chunksToLinesTables from '../../fixture/chunksToLinesTables.json'

interface StringToLinesTest {
  name: string
  source: string
  lines: string[]
}

describe('chunksToLines', () => {
  const tests = chunksToLinesTables
    .filter((x) => x.chunks.indexOf('error') === -1)
    .map((x) => ({...x, source: x.chunks.join('')}))
  tests.forEach((test: StringToLinesTest) => {
    it(test.name, () => {
      const target = new CollectLinesObserver()
      stringToLines(test.source, target)
      expect(test.lines).deep.equal(target.lines)
      expect(target.failed).equal(0)
      expect(target.completed).equal(1)
    })
  })
})
