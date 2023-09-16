import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    port: 3000,
  },
  plugins: [
    react(),
    ...VitePluginNode({
      adapter: 'express',
      appPath: './backend/server/server.ts',
    }),
  ],
})
