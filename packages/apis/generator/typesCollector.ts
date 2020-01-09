/**
 * Collects types that must be imported for a generated API.
 */
export default class TypesCollector {
  types: {[key: string]: boolean} = {}
  add(type: string): void {
    if (type && type.charAt(0).toUpperCase() === type.charAt(0)) {
      if (type.includes('|')) {
        type
          .split('|')
          .map(x => x.trim())
          .forEach(x => (this.types[x] = true))
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
