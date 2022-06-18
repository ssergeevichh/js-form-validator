import path from 'path'
import { defineConfig } from 'vite'
const resolve = str => path.resolve(__dirname, str)

export default defineConfig({
  root: resolve('.'),
  resolve: {
    alias: {
      'sergeevich-js-valitool': resolve('../src/validation/form/main.js'),
    },
  },
})
