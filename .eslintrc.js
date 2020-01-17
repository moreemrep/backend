module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'security'
  ],
  extends: [
    'standard', 
    'plugin:security/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  env: {
    node: true,
    jest: true
  }
}
