import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'
import { runtimeConfig } from './runtime.config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    'nuxt-mongoose',
  ],

  imports: {
    presets: [
      { from: 'consola', imports: ['consola'] },
      { from: 'animejs', imports: ['animate', 'utils', 'waapi', 'createTimeline', { name: 'JSAnimation', type: true }] },
      { from: 'three', imports: [{ name: '*', as: 'Three' }] },
    ],
    imports: [],
    dirs: ['stores', 'apis/**'],
  },

  devtools: { enabled: true },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
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

  css: ['~/styles/css/main.css'],

  colorMode: { classSuffix: '' },

  ui: { theme: { prefix: 'tw' }, fonts: false },

  runtimeConfig,

  alias: { dayjs: 'dayjs' },

  devServer: { host: '0.0.0.0', port: 3001 },

  future: { compatibilityVersion: 4 },

  // when using generate, payload js assets included in sw precache manifest
  // but missing on offline, disabling extraction it until fixed
  experimental: { payloadExtraction: false, renderJsonPayloads: true, typedPages: true, asyncContext: true },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: { options: { target: 'esnext' } },
    prerender: {
      crawlLinks: false,
      routes: [],
      ignore: [],
    },
    imports: {
      dirs: ['server/services/**', 'server/repositories/**', 'server/schemas/**', 'server/dto/**', 'server/entities/**', 'server/hooks/**', 'server/model/**', 'server/utils/**', 'server/factories/**'],
      presets: [
        { from: 'zod', imports: ['z', { name: 'z', type: true }] },
      ],
    },
    storage: {
      redis: { driver: 'redis', host: 'redis', port: 6379 },
      mongodb: { driver: 'mongodb', connectionString: runtimeConfig.MONGO.MONGOOSE_URI, databaseName: 'album' },
    },

  },

  eslint: {
    config: {
      standalone: false,
      nuxt: { sortConfigKeys: true },
    },
  },

  mongoose: {
    uri: runtimeConfig.MONGO.MONGOOSE_URI,
    options: { maxPoolSize: 20, minPoolSize: 1, autoIndex: true },
    modelsDir: 'models',
    devtools: true,
  },

  pwa,
})
