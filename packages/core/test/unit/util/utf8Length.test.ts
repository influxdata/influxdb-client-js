import {expect} from 'chai'
import utf8Length from '../../../src/util/utf8Length'

describe('byteLength', () => {
  ;[
    {s: ''},
    {s: 'hi'},
    {s: 'šraňka'},
    {s: 'love\u2665'},
    {s: '\u{1f0a1}'},
  ].forEach(({s}) => {
    const length = new TextEncoder().encode(s).length
    it(`${s} has length ${length}`, () => {
      expect(utf8Length(s)).equals(length)
    })
  })
})
