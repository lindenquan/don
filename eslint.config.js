import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import qwikPlugin from 'eslint-plugin-qwik'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: typescriptParser,
    parserOptions: {
      project: './tsconfig.json', // Point to your TypeScript config file
      tsconfigRootDir: __dirname, // Set the root directory
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      console: 'readonly',
      module: 'readonly',
    },
  },
  files: ['**/*.ts', '**/*.tsx'], // Include all .ts and .tsx files
  plugins: {
    '@typescript-eslint': typescriptPlugin,
    qwik: qwikPlugin,
  },
  rules: {
    ...typescriptPlugin.configs.recommended.rules,
    ...qwikPlugin.configs.recommended.rules,
    'qwik/jsx-no-script-url': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    'prefer-spread': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
  },
  // Add ignores here to replace the content of .eslintignore
  ignores: [
    '**/*.log',
    '**/.DS_Store',
    '*.vscode/settings.json',
    '.history',
    '.yarn',
    'bazel-*',
    'bazel-bin',
    'bazel-out',
    'bazel-qwik',
    'bazel-testlogs',
    'dist',
    'dist-dev',
    'lib',
    'lib-types',
    'etc',
    'external',
    'node_modules',
    'temp',
    'tsc-out',
    'tsdoc-metadata.json',
    'target',
    'output',
    'rollup.config.js',
    'build',
    '.cache',
    '.vscode',
    '.rollup.cache',
    'dist',
    'tsconfig.tsbuildinfo',
    '.netlify',
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
    'server',
  ],
}
