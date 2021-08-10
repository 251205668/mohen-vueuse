import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginComponents from 'vite-plugin-components';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginComponents(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 8080,
    cors: true,
  },
});
