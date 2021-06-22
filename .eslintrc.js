module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser'
  },
  plugins: ['html', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  globals: {
    React: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'arrow-body-style': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
