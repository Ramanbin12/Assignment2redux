module.exports = {
    env: {
      browser: true,
      es2021: true,
      commonjs: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
      ecmaVersion: 'latest',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
      camelcase: 'off',
      'max-len': [
        'error',
        {
          code: 125,
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-duplicate-props': 'off',
      'no-return-assign': 'off',
      'no-console': 1,
      'default-param-last': 'off',
      'global-require': 0,
      'import/prefer-default-export': 'off',
      'no-use-before-define': [
        'error',
        {
          variables: false,
          functions: false,
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', 'tsx'],
        },
      ],
      'react/forbid-prop-types': 0,
      'react/require-default-props': 0,
      'arrow-body-style': 0,
      'linebreak-style': 0,
      '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      semi: ['error', 'always'],
      // TODO: Remove these rules once the codebase is cleaned up
      // Begin
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/require-await': 'warn',
      'no-constant-condition': 'warn',
      // End
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };