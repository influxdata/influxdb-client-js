import {currentTimes, useProcessHrtime} from '../../../src'
import {expect} from 'chai'

describe('currentTime', () => {
  ;[true, false].forEach((useProcessApi: boolean) => {
    describe(
      useProcessApi
        ? 'with the help of process.hrtime'
        : 'using just Date.now()',
      () => {
        let useHrtime: boolean
        beforeEach(() => {
          useHrtime = useProcessHrtime(useProcessApi)
        })
        afterEach(() => {
          useProcessHrtime(true)
        })
        it('uses the implementation as requested', () => {
          expect(useProcessApi).to.be.equal(useHrtime)
        })
        it('calculates time in seconds', () => {
          const val = currentTimes['s']()
          const ms = Date.now()
          expect(val).to.have.length(
            String(Math.floor(Date.now() / 1000)).length
          )
          expect(Math.abs(parseInt(val) - ms / 1000)).to.be.lessThan(5)
        })
        it('calculates time in milliseconds', () => {
          const val = currentTimes['ms']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length)
          expect(Math.abs(parseInt(val) - ms)).to.be.lessThan(5000)
        })
        it('calculates time in microseconds', () => {
          const val = currentTimes['us']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length + 3)
          expect(Math.abs(parseInt(val) - ms * 1000)).to.be.lessThan(5000000)
        })
        it('calculates time in nanoseconds', () => {
          const val = currentTimes['ns']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length + 6)
          expect(Math.abs(parseInt(val) - ms * 1000000)).to.be.lessThan(
            5000000000
          )
        })
      }
    )
  })
})
