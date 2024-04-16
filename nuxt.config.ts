const isDev = process.env.NODE_ENV === 'development'
const isElectron = process.env.IS_ELECTRON === 'true'
export default defineNuxtConfig({
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
  ssr: false,
  css: ['@/assets/main.css'],
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-lodash',
    isElectron ? 'nuxt-electron' : undefined
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
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  vite: {
    plugins: [],
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
