module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          ui: './src/ui',
          '@': './src'
        }
      }
    ]
  ]
};
