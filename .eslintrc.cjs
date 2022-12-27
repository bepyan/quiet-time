module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // https://nextjs.org/docs/basic-features/eslint
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [['^\\u0000', '^@?\\w'], ['^~/', '^@/'], ['^\\.']],
          },
        ],
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./packages/*/tsconfig.json'],
      },
    },
    {
      files: ['**/*.js?(x)'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015,
      },
    },
  ],
};
