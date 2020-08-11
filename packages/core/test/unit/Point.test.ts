import {expect} from 'chai'
import Point from '../../src/Point'
import pointTables from '../fixture/pointTables.json'
import {PointSettings} from '../../src'

interface PointTest {
  name?: string
  tags?: Array<[string, string]>
  fields?: Array<[string, 'n' | 's' | 'b' | 'i', any]>
  time?: string
  line: string | undefined
  toString: string | undefined
  index?: number
  fails?: boolean
  throws?: string

  pointSettings?: {
    defaultTags: {[key: string]: string}
    convertTime?: string
  }
}

let testIndex = 1
function createPoint(test: PointTest): Point {
  test.index = testIndex++
  const point =
    testIndex % 2 == 1
      ? new Point(test.name)
      : test.name
      ? new Point().measurement(test.name)
      : new Point()
  ;(test.fields ?? []).forEach(
    (field: [string, 'n' | 's' | 'b' | 'i', any]) => {
      switch (field[1]) {
        case 'n':
          point.floatField(field[0], field[2])
          break
        case 's':
          point.stringField(field[0], field[2])
          break
        case 'b':
          point.booleanField(field[0], field[2])
          break
        case 'i':
          point.intField(field[0], field[2])
          break
      }
    }
  )
  ;(test.tags || []).forEach((tag: [string, string]) => {
    point.tag(tag[0], tag[1])
  })
  if (test.time) {
    point.timestamp(test.time)
  }
  return point
}

function createPointSettings(pointSettings: {
  defaultTags: {[key: string]: string}
  convertTime?: string
}): PointSettings {
  if (pointSettings.convertTime) {
    return {
      defaultTags: pointSettings.defaultTags,
      convertTime: (): string | undefined => pointSettings.convertTime,
    }
  } else {
    return {
      defaultTags: pointSettings.defaultTags,
    }
  }
}

describe('Point', () => {
  describe('toLineProtocol', () => {
    ;(pointTables as Array<PointTest>).forEach((test: PointTest) => {
      if (test.throws) {
        it(`throws error for ${test.name}`, () => {
          expect(() => createPoint(test)).to.throw(test.throws)
        })
      } else {
        const point = createPoint(test)
        it(`creates line for '${test.index}/${test.name}'`, () => {
          if (test.fails) {
            expect(point.toString()).to.include('invalid point')
          } else {
            if (test.pointSettings) {
              expect(
                point.toLineProtocol(createPointSettings(test.pointSettings))
              ).to.be.equal(test.line)
            } else {
              expect(point.toString()).to.be.equal(test.line)
            }
          }
        })
      }
    })
  })
})
