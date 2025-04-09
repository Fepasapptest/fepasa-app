import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fepasa-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg', 'logo.png'],
      manifest: {
        name: 'FEPASA App',
        short_name: 'FEPASA',
        description: 'Aplicación de seguridad FEPASA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/fepasa-app/',
        scope: '/fepasa-app/',
        display: 'standalone',
        orientation: 'portrait',
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
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,mp4}'],
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://fepasapptest\\.github\\.io/fepasa-app/.*'),
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
        navigateFallback: '/fepasa-app/index.html',
        navigateFallbackAllowlist: [/^\/fepasa-app\//],
        skipWaiting: true,
        clientsClaim: true
      }
    })
  ]
}) 