/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, 'android/app/src/main/assets/'),
    path.resolve(__dirname, 'android/app/src/main/assets/other'),
    // Add any other relevant directories here
  ],
};
