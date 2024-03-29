module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }]],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
