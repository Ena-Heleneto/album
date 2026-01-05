import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],

  imports: {
    presets: [
      { from: 'consola', imports: ['consola'] },
      { from: 'animejs', imports: ['animate', 'utils', 'waapi', 'createTimeline', { name: 'JSAnimation', type: true }] },
      { from: 'three', imports: [{ name: '*', as: 'Three' }] },
    ],
    imports: [],
    dirs: ['stores'],
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
  },

  runtimeConfig: {
    // redis: { host: 'redis', port: 6379 },
    // mongoose: {
    //   uri: 'mongodb://root:password@mongodb:27017/admin',
    // },
  },

  devServer: {
    host: '0.0.0.0',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: [],
      ignore: [],
    },
    imports: {
      dirs: ['server/services/**', 'server/repositories/**', 'server/schemas/**', 'server/dto/**', 'server/entities/**', 'server/hooks/**', 'server/model/**', 'server/utils/**', 'server/factories/**'],
      presets: [
        { from: 'consola', imports: ['consola'] },
        { from: 'zod', imports: ['z', { name: 'z', type: true }] },
      ],
    },
    storage: {
      redis: { driver: 'redis', host: 'redis', port: 6379 },
      mongodb: { connectionString: 'mongodb://root:password@mongodb:27017/admin' },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,
})
