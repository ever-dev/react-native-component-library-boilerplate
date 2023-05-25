module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'prettier',
    '@react-native-community',
  ],
  ignorePatterns: ['jest.setup.ts'],
  overrides: [
    {
      files: '**/*.{ts}',
      rules: {
        'no-undef': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: '**/*{.,_}{test,spec,stories}.{js,ts}',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    'sort-destructure-keys',
    'sort-keys-fix',
    '@typescript-eslint',
    'unused-imports',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    camelcase: 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        tabWidth: 2,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        // for redux, setting the state
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
