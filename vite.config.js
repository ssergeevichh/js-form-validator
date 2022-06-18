const path = require('path');
const { defineConfig } = require('vite');
const resolve = (str) => path.resolve(__dirname, str);

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve('src/validation/form/main.js'),
      name: 'FormValidator',
      fileName: (format) => `sergeevich-js-valitool.${format}.js`
    }
  },
})