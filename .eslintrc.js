module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'block-spacing': 1,
    'brace-style': 1,
    'curly': [1, 'all'],
    'eqeqeq': 1,
    'indent': [1, 2, { SwitchCase: 1 }],
    'keyword-spacing': 1,
    'object-curly-spacing': [1, 'always'],
    'quotes': [1, 'single']
  }
};
