import {expect} from 'chai'
import TypesCollector from '../../generator/typesCollector'

interface TypesCollectorTest {
  name: string
  toAdd: Array<string>
  result: string
}

describe('TypesCollector', () => {
  const tests: TypesCollectorTest[] = [
    {
      name: 'collect built-in types',
      toAdd: ['string', 'any', 'boolean', 'void'],
      result: '',
    },
    {
      name: 'collect custom types',
      toAdd: ['C', 'B', 'A', 'B'],
      result: 'A, B, C',
    },
    {
      name: 'collect custom alternative types',
      toAdd: ['C | B | A', 'B'],
      result: 'A, B, C',
    },
    {
      name: 'collect anonymous type 1',
      toAdd: [
        '{\n  /** optional, when provided will replace the name */\n  name?: string;\n  /** optional, when provided will replace the description */\n  description?: string;\n  /** optional, when provided will replace all existing cells with the cells provided */\n  cells?: CellWithViewProperties;\n}',
      ],
      result: 'CellWithViewProperties',
    },
    {
      name: 'collect anonymous type 2',
      toAdd: ['{\n  d?: D | C;\n  description?: A;\n  name?: string;\n}'],
      result: 'A, C, D',
    },
    {
      name: 'collect anonymous type 2',
      toAdd: [
        'Array<{\n  d?: D | C;\n  description?: A;\n  name?: string;\n}>',
      ],
      result: 'A, C, D',
    },
    {
      name: 'collect ListItem[]',
      toAdd: ['ListItem[]'],
      result: 'ListItem',
    },
    {
      name: 'collect string[]',
      toAdd: ['string[]'],
      result: '',
    },
  ]
  tests.forEach((test) => {
    it(test.name, () => {
      const collector = new TypesCollector()
      test.toAdd.forEach(collector.add.bind(collector))
      const result = collector.toString()
      expect(result).equals(test.result)
      expect(collector.hasTypes()).equals(result !== '')
    })
  })
})
