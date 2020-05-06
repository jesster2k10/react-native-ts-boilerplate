module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'unused-imports',
    'detox',
    'jest'
  ],
  rules: {
    // Semi-colons are un-needed
    semi: 'off',
    // Allow .tsx extensions
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    // Spaces between class members don't look as good
    'lines-between-class-members': 'off',
    // Un-necessary rule
    'react/jsx-props-no-spreading': 'off',
    // Babel module resolver,
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '@assets',
          '@components',
          '@lib',
          '@hooks',
          '@i18n',
          '@navigation',
          '@services',
          '@theme',
          '@views',
          '@models',
          '@repositories'
        ],
      },
    ],
    // Don't explicitly add .tsx/.ts extensions
    'import/extensions': [
      2,
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Ensure correct ordering of imports
    'import/order': [
      2,
      {
        'newlines-between': 'never',
      },
    ],
    // Allows for auto-fixing of unused imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-imports-ts': 2,
    'unused-imports/no-unused-vars': 2,
    // Prefer state as a class property
    'react/state-in-constructor': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.story.tsx", "storybook/*"] }],
    "no-use-before-define": ["error", { "variables": false }]
  },
  env: {
    "jest/globals": true
  }
}
