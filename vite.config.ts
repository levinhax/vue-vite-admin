import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // build typecheck 依赖需要升级

const pathResolve = (dir: string) => {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  // 静态资源目录
  // assetsInclude: 'public',
  // 导入文件夹别名
  alias: [{ find: '/@', replacement: pathResolve('./src') }],
  // 配置Dep优化行为
  // optimizeDeps: {
  // 这个命令专门为解决模块引用的坑而开发
  // 例如我们要在 vite 中使用 lodash，只需要在 vite.config.js （vite 配置文件）中，配置 optimizeDeps 对象，在 include 数组中添加 lodash
  //   include: ['lodash'],
  // },
  optimizeDeps: {
    // include: ['axios', 'nprogress', 'mockjs']
    include: ['@ant-design/icons-vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: #fff;`
      }
    }
  },
  // 代理
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001/',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  //   port: 8080, // 服务端口
  // },
  build: {
    // sourcemap: true,
    // cssCodeSplit: true
  },
  // 插件
  plugins: [vue(), vueJsx()],
})
