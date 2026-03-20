import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      devOptions: {
        enabled: true 
      },
      manifest: {
        name: 'STRATUS Interface',
        short_name: 'STRATUS',
        description: 'The Source Manifested',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/552/552489.png', 
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      // THIS IS THE WORKBOX ARSENAL REQUIRED BY YOUR CURRICULUM
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Cache all internal assets
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://cdn-icons-png.flaticon.com',
            handler: 'CacheFirst', // Trust the cache for icons to ensure offline visibility
            options: {
              cacheName: 'stratus-icons',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Year
              }
            }
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 5173
  }
});