import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://fepasapptest.github.io/fepasa-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      manifest: {
        name: 'FEPASA App',
        short_name: 'FEPASA',
        description: 'Aplicación de seguridad FEPASA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: 'https://fepasapptest.github.io/fepasa-app/',
        scope: 'https://fepasapptest.github.io/fepasa-app/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*'],
        maximumFileSizeToCacheInBytes: 50000000,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fepasapptest\.github\.io\/fepasa-app\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'fepasa-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60 // 24 horas
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        navigateFallback: 'https://fepasapptest.github.io/fepasa-app/index.html'
      }
    })
  ]
}) 