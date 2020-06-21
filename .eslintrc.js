module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    curly: ['error', 'multi-or-nest'],
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
