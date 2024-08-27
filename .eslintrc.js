module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'no-unused-vars': ['error', { args: 'none', vars: 'all' }],
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'warn',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=12.0.0',
        ignores: [],
      },
    ],
  },
};
