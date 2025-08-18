import process from 'node:process'
import { appDescription } from './app/constants/index'
import alias from './config/alias.config'
import runtimeConfig from './config/runtime.config'

export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@element-plus/nuxt',
    'nuxt-swiper',
    'nuxt-headlessui',
    '@morev/vue-transitions/nuxt',
    '@nuxt/test-utils/module',
    '@paper-ui/nuxt',
    'nuxt-mongoose',
    '@nuxtjs/i18n'
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

  devtools: { enabled: true, timeline: { enabled: true } },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      script: [],
      link: [
        // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Lemonada&family=ZCOOL+KuaiLe&display=swap',
        // },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  css: ['~/style/css/index.css'],

  colorMode: { classSuffix: '' },

  runtimeConfig,

  alias,

  devServer: { port: Number(process.env.NUXT_PORT) || 3000 },

  future: { compatibilityVersion: 4 },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    componentIslands: true,
    viewTransition: true
  },

  compatibilityDate: '2024-07-30',

  nitro: {
    // TODO 临时修复无法连接本地开发服务的bug
    devProxy: { host: 'localhost' },
    esbuild: { options: { target: 'esnext' } },
    prerender: { crawlLinks: true, routes: [], ignore: [] },
    experimental: { asyncContext: true, websocket: true, tasks: true, openAPI: true },
    imports: {
      dirs: ['server/services/**', 'server/repositories/**', 'server/schemas/**', 'server/dto/**', 'server/entities/**', 'server/hooks/**', 'server/model/**', 'server/utils/**', 'server/factories/**'],
      presets: [
        { from: 'consola', imports: ['consola'] },
        { from: 'zod', imports: ['z', { name: 'z', type: true }] },
      ],
    },
  },

  hub: { blob: true, ai: true, database: true, browser: true, cache: true, kv: true, workers: true },

  auth: { hash: { scrypt: {} } },

  elementPlus: {},

  eslint: {
    config: {
      standalone: false,
      nuxt: { sortConfigKeys: true },
      stylistic: { quotes: 'single', commaDangle: 'never' },
    },
  },
  headlessui: { prefix: '' },

  i18n: { defaultLocale: 'en', locales: [
    { code: 'en', name: 'English', file: 'en.json' },
    { code: 'cn', name: '中文', file: 'cn.json' }
  ] },

  mongoose: { uri: process.env.MONGODB_URI, options: { maxPoolSize: 20, minPoolSize: 1, autoIndex: true }, modelsDir: 'models', devtools: true },

  vueTransitions: {}
})
