import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 分离大型库到单独的chunk
          if (id.includes('node_modules')) {
            if (id.includes('react') && id.includes('dom')) {
              return 'react-vendor';
            }
            if (id.includes('@iconify')) {
              return 'iconify';
            }
            if (id.includes('@radix-ui')) {
              return 'radix';
            }
            if (id.includes('zustand')) {
              return 'zustand';
            }
            if (id.includes('html-to-image')) {
              return 'html-to-image';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-react';
            }
            if (id.includes('react-icons')) {
              return 'react-icons';
            }
            if (id.includes('react-colorful')) {
              return 'react-colorful';
            }
            if (id.includes('react-moveable')) {
              return 'react-moveable';
            }
          }
        },
      },
    },
    // 启用压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除console语句
        drop_debugger: true, // 移除debugger语句
      },
    },
  },
  server: {
    // 预加载优化
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@iconify/react',
        'zustand',
        'html-to-image',
        'lucide-react',
        'react-icons',
        'react-colorful',
        'react-moveable'
      ]
    }
  }
});