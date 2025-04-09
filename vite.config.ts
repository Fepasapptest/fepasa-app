import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fepasa-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'FEPASA App',
        short_name: 'FEPASA',
        description: 'Aplicación de seguridad FEPASA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
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
            urlPattern: /\.(js|css|html|png|jpg|jpeg|gif|svg|mp4)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache'
            }
          },
          {
            urlPattern: /.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'dynamic-cache'
            }
          }
        ]
      }
    })
  ]
}) 