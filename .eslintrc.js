module.exports = {
    parser: 'babel-eslint',
    'extends': 'airbnb',
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
      'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
      'no-underscore-dangle': ['off'],
      'react/forbid-prop-types': ['off'],
      'import/prefer-default-export': ['off'],
      'jsx-a11y/label-has-for': ['error', { required: { every: ['id'] } }],
      'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
      'comma-dangle': ['error', 'never'],
      'function-paren-newline': ['error', 'consistent'],
      'react/jsx-no-bind': ['error', {}],
      'react/destructuring-assignment': ['off'],
      'react/jsx-one-expression-per-line': ['off']
    },
    env: {
      browser: true
    },
    settings: {
      'import/resolver': {
        'babel-module': {}
      }
    }
  };
  