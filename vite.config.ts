import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginNode  } from 'vite-plugin-node'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // server: {
  //   port: 5173,
  // },
  // plugins: [
  //   react(),
  //   ...VitePluginNode({
  //     adapter: 'express',
  //     appPath: './backend/server/server.ts',
  //   }),
  // ],
});
