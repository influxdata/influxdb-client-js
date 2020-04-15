import {
  currentTime,
  useProcessHrtime,
  dateToProtocolTimestamp,
} from '../../../src'
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
          const val = currentTime['s']()
          const ms = Date.now()
          expect(val).to.have.length(
            String(Math.floor(Date.now() / 1000)).length
          )
          expect(Math.abs(parseInt(val) - ms / 1000)).to.be.lessThan(5)
        })
        it('calculates time in milliseconds', () => {
          const val = currentTime['ms']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length)
          expect(Math.abs(parseInt(val) - ms)).to.be.lessThan(5000)
        })
        it('calculates time in microseconds', () => {
          const val = currentTime['us']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length + 3)
          expect(Math.abs(parseInt(val) - ms * 1000)).to.be.lessThan(5000000)
        })
        it('calculates time in nanoseconds', () => {
          const val = currentTime['ns']()
          const ms = Date.now()
          expect(val).to.have.length(String(Date.now()).length + 6)
          expect(Math.abs(parseInt(val) - ms * 1000000)).to.be.lessThan(
            5000000000
          )
        })
        it('returns different nanoseconds even when pushed quickly', async () => {
          const size = 100
          const data = new Array(size)
          for (let i = 0; i < size / 2; i++) {
            data[i] = currentTime.nanos()
          }
          await new Promise<void>((resolve, _reject) =>
            setTimeout(() => resolve(), 1)
          )
          for (let i = size / 50; i < size; i++) {
            data[i] = currentTime.nanos()
          }

          for (let i = 1; i < size; i++) {
            // console.log(`useProcessApi=${useProcessApi} ${data[i - 1]}`)
            // eslint-disable-next-line no-undef
            if (BigInt(data[i - 1]) >= BigInt(data[i])) {
              expect.fail(
                `(${i}) ${data[i - 1]} < ${
                  data[i]
                } is not true with useProcessApi=${useProcessApi}`
              )
            }
          }
        })
      }
    )
  })
})

describe('dateToProtocolTimestamp', () => {
  const subject = new Date(1584294154693)
  expect(dateToProtocolTimestamp['s'](subject)).to.be.equal('1584294154')
  expect(dateToProtocolTimestamp['ms'](subject)).to.be.equal('1584294154693')
  expect(dateToProtocolTimestamp['us'](subject)).to.be.equal('1584294154693000')
  expect(dateToProtocolTimestamp['ns'](subject)).to.be.equal(
    '1584294154693000000'
  )
})
