const isDev = process.env.NODE_ENV === 'development'
const isElectron = process.env.IS_ELECTRON === 'true'
export default defineNuxtConfig({
  ssr:false,
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-CN"
      },
      title: 'XingXingMusic',
      meta: [
        { charset: 'utf-8' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/music.ico' }],
    }
  },
  css: ['@/assets/main.css'],
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-lodash',
    'nuxt-electron'
  ],
  electron: {
    build: isElectron ? [{
      entry: 'electron/main.ts'
    }, {
      entry: 'electron/preload.ts'
    }] : []
  },
  nitro: {
    routeRules: {
      '/**': { isr: false },
    },
  },
  appConfig: {
    limit: 24
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: isDev ? process.env.NETEASE_API_BASEURL : "https://netease-cloud-music-api-tau-tan.vercel.app/"
    },
  }
})
