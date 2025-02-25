module.exports = {
  extends: ['@verypossible/eslint-config/native'],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
}
