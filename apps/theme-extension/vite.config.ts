import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'assets',
    emptyOutDir: false, // Don't empty so we keep other liquid assets if any
    lib: {
      entry: 'src/main.tsx',
      name: 'StellaWidget',
      formats: ['es'],
      fileName: () => 'stella-widget.bundle.js'
    },
    rollupOptions: {
      // Prevent externalizing react since we want a self-contained bundle for the widget
      external: [],
      output: {
        assetFileNames: 'stella-widget.bundle.[ext]'
      }
    }
  }
});
