import {expect} from 'chai'
import LineSplitter from '../../../src/util/LineSplitter'
import lineSplitterTables from '../../fixture/lineSplitterTables.json'

interface LineSplitterTest {
  line?: string
  result: string[]
}

describe('LineSplitter', () => {
  it('does not reuse OOTB', () => {
    const subject = new LineSplitter()
    expect(subject.reuse).to.be.false
  })
  ;[true, false].forEach((reuse: boolean) => {
    describe(`with reuse=${reuse}`, () => {
      const subject = new LineSplitter()
      let last: string[] | undefined = undefined
      ;(lineSplitterTables as Array<LineSplitterTest>).forEach(
        (test: LineSplitterTest) => {
          subject.reuse = reuse
          expect(subject.reuse).to.be.equal(reuse)
          it(`creates values from: ${test.line}`, () => {
            const values = subject.splitLine(test.line)
            let result: string[]
            if (reuse) {
              if (last) expect(values).to.be.equal(values)
              result = values.slice(0, subject.lastSplitLength)
            } else {
              expect(subject.lastSplitLength).to.equal(test.result.length)
              result = values
            }
            expect(result).to.deep.equal(test.result)
            last = result
          })
        }
      )
    })
  })
})
