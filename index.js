const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

const LINE_WIDTH = 120; // Uses the IntelliJ's default

module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  ignorePatterns: ['*.d.ts'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off', // Allows lmn-common-lib compatibility
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }], // Avoids 'anonymous' functions in error stacks
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'arrow-parens': ['error', 'always'], // Easier refactors
    'import/prefer-default-export': 'off', // Easier refactors

    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-boolean-value': ['error', 'always'],

    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'es5', arrowParens: 'always', printWidth: LINE_WIDTH },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'no-useless-constructor': 'off', // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
        '@typescript-eslint/no-useless-constructor': 'error',
      }),
    },
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
};
