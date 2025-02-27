module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@types': './src/types',
          '@redux': './src/redux',
          '@config': './src/config',
        },
      },
    ],
  ],
  overrides: [
    {
      test: /node_modules[/\\]react-native[/\\]/,
      plugins: [
        ['@babel/plugin-transform-private-methods', {loose: true}],
        ['@babel/plugin-transform-class-properties', {loose: true}],
        ['@babel/plugin-transform-private-property-in-object', {loose: true}],
      ],
    },
  ],
};
