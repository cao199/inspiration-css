import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    open: true, //自动打开浏览器
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src",
          import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#2B60DD',
          // 'link-color': 'red',
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {},
    },
  },
  optimizeDeps: {
    include: ['dayjs/locale/zh-cn']
  }
})
