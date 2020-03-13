module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json'
      }
    }
  },
  env: {
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.spec.tsx'] }
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
