import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  /* custom */
  resolve: { 
    alias: [
      { find: '@Types', replacement: path.resolve('./src/@Types') },
      { find: 'apis', replacement: path.resolve('./src/apis') },
      { find: 'assets', replacement: path.resolve('./src/assets') },
      { find: 'components', replacement: path.resolve('./src/components') },
      { find: 'contexts', replacement: path.resolve('./src/contexts') },
      { find: 'hooks', replacement: path.resolve('./src/hooks') },
      { find: 'routes', replacement: path.resolve('./src/routes') },
      { find: 'layouts', replacement: path.resolve('./src/layouts') },
      { find: 'pages', replacement: path.resolve('./src/pages') },
      { find: 'styles', replacement: path.resolve('./src/styles') },
      { find: 'utils', replacement: path.resolve('./src/utils') }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import './src/styles/_mixins.scss';
      `
      }
    }
  }
});
