import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Galactic Fishing Game',
        short_name: 'Fishing',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#0f172a',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api-game\.bloque\.app\/game\/leaderboard/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'leaderboard-cache',
              expiration: { maxEntries: 50 },
            },
          },
          {
            urlPattern: /^https:\/\/api-game\.bloque\.app\/game\/market/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'market-cache',
              expiration: { maxEntries: 50 },
            },
          }
        ]
      }
    }),
  ]
});
