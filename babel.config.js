module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@lib': ['./src/lib'],
          '@hooks': ['./src/lib/hooks'],
          '@i18n': ['./src/lib/i18n'],
          '@navigation': ['./src/navigation'],
          '@services': ['./src/services'],
          '@theme': ['./src/theme'],
          '@views': ['./src/views'],
          '@models': ['./src/models'],
          '@repositories': ['./src/repositories'],
        },
      },
    ],
    [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}],
  ],
};
