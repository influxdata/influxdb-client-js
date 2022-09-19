// eslint-disable-next-line @typescript-eslint/no-var-requires
const {readFileSync, writeFileSync} = require('fs')
const VERSION = process.env.VERSION

if (!VERSION) {
  console.error('VERSION environment variable is not defined!')
  process.exit(1)
}

const fileName = __dirname + '/../packages/core/src/impl/version.ts'
const content = readFileSync(fileName, 'utf-8')
const updatedVersion = content.replace(
  /CLIENT_LIB_VERSION = '[^']*'/,
  `CLIENT_LIB_VERSION = '${VERSION}'`
)
writeFileSync(fileName, updatedVersion, 'utf8')
