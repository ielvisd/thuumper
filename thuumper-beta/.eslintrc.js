module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true },
    },
    {
      files: ['*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': [0],
      },
    },
  ],
};
