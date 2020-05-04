/**
 * Collects types that must be imported for a generated API.
 */
export default class TypesCollector {
  types: {[key: string]: boolean} = {}
  add(type: string): void {
    if (type && type.charAt(0).toUpperCase() === type.charAt(0)) {
      if (type.startsWith('{')) {
        // anonymous type; process references to custom types in it
        // see typesCollector.test.ts
        const customTypeRegExp = / ([A-Z][A-Za-z0-9-_| ]*);\n/g
        let match: RegExpExecArray | null
        while ((match = customTypeRegExp.exec(type)) !== null) {
          // console.log('match[1]', match[1], customTypeRegExp.lastIndex)
          this.add(match[1])
        }
      } else if (type.includes('|')) {
        type
          .split('|')
          .map(x => x.trim())
          .forEach(x => this.add(x))
      } else {
        this.types[type] = true
      }
    }
  }
  toString(): string {
    return Object.keys(this.types)
      .sort()
      .join(', ')
  }
  hasTypes(): boolean {
    return !!Object.keys(this.types).length
  }
}
