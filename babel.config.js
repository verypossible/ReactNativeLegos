module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^@legos/(.+)': './src/packages/\\1',
          assets: './assets',
          ui: './src/ui',
        },
      },
    ],
  ],
};
