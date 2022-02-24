import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
const { resolve } = require('path')
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    // new MonacoWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/scss/_global.scss" as *;', // 添加公共样式
      },
    },
  },

})
