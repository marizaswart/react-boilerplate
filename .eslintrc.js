const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    'browser': true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    },
  },
  rules: {
    semi: [2, 'never'],
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-return-assign': 0,
  }
}
