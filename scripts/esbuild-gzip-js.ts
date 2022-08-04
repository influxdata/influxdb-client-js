import {mkdir, writeFile} from 'fs/promises'
import {dirname} from 'path'
import {promisify} from 'util'
import {gzip} from 'zlib'

const compressGz = promisify(gzip)

export interface BuildResult {
  outputFiles?: Array<{path: string; contents: Uint8Array}>
}
/**
 * ESBuild onEnd callback that additionally gzips all produced JS files.
 */
export async function esbuildGzipOnEnd(result: BuildResult): Promise<void> {
  // gzip js files
  await Promise.all(
    (result.outputFiles || [])
      .filter((x) => x.path.endsWith('js'))
      .map(async ({path, contents}) => {
        await mkdir(dirname(path), {recursive: true})
        await writeFile(path + '.gz', await compressGz(contents, {level: 9}))
      })
  )
}

/** ESBuild plugin that gzips output js files */
export const esbuildGzipOutJsPlugin = {
  name: 'gzipJsFiles',
  setup: (build: {
    onEnd: (callback: (result: BuildResult) => Promise<void>) => void
  }) => {
    build.onEnd(esbuildGzipOnEnd)
  },
}
