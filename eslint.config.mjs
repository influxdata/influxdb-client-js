import {defineConfig} from 'eslint/config'
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import tsdoc from 'eslint-plugin-tsdoc'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import js from '@eslint/js'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ),
    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      prettier,
      tsdoc,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {},
      },
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],

          filter: {
            regex: '^DEFAULT_|^Log$',
            match: false,
          },

          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      'tsdoc/syntax': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },
])
