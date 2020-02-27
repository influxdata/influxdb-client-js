import {expect} from 'chai'
import {escape} from '../../../src'
import escapeTables from '../../fixture/escapeTables.json'

describe('escape', () => {
  Object.keys(escapeTables).forEach((escaper: string) => {
    describe(String(escaper), () => {
      ;(escapeTables as any)[escaper].forEach((test: [string, string]) => {
        it(`escapes \`${test[0]}\` as \`${test[1]}\``, () => {
          expect((escape as any)[escaper](test[0])).to.equal(test[1])
        })
      })
    })
  })
})
