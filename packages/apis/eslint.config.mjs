import {defineConfig} from 'eslint/config'
import tsdoc from 'eslint-plugin-tsdoc'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
  {
    files: ['src/generated/*.ts'],
    ignores: ['**/*.test.js'],
    plugins: {
      tsdoc,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'tsdoc/syntax': 'warn',
    },
  },
])
