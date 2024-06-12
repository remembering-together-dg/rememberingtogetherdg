import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      '**/temp.js',
      'config/*',
      '!.*.json',
      'docs',
      'dist',
      'build',
      'src/js/vendor',
      '**/node_modules'
    ],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      'no-unused-vars': ['error', { argsIgnorePattern: '^typedefs' }],
      'no-useless-assignment': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-yield': 'error',
      'rest-spread-spacing': 'error',
      'sort-imports': 'error',
      'sort-keys': 'error',
      'sort-vars': 'error'
    }
  }
]
