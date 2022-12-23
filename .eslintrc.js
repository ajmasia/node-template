module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
