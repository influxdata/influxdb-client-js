/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const https = require('https')
const path = require('path')
const {writeFile} = require('fs/promises')

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, function(res) {
        const data = []
        res
          .on('data', chunk => {
            data.push(chunk)
          })
          .on('end', () => {
            resolve(Buffer.concat(data))
          })
      })
      .on('error', reject)
  })
}

const FILES = [
  {
    file: 'resources/oss.yml',
    url:
      'https://raw.githubusercontent.com/influxdata/openapi/master/contracts/oss.yml',
  },
  {
    file: 'resources/invocable-scripts.yml',
    url:
      'https://raw.githubusercontent.com/influxdata/openapi/master/contracts/invocable-scripts.yml',
  },
  {
    file: 'resources/cloud.yml',
    url:
      'https://raw.githubusercontent.com/influxdata/openapi/master/contracts/cloud.yml',
  },
]
async function downloadFiles() {
  for (const {file, url} of FILES) {
    console.info(url)
    const content = await downloadFile(url)
    const fullPath = path.join(__dirname, '..', file)
    await writeFile(fullPath, content)
    console.log('=>', fullPath, content.length)
  }
}

downloadFiles()
  .then(() => console.log('\nFinished SUCCESS'))
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
