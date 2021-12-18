module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "react/react-in-jsx-scope": "off",
  },
};
