module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', 'prettier'],
  rules: {
    "react/no-unescaped-entities": 0,
  },
};
