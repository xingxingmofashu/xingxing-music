import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
    routeRules: {
        '/**': { cors: true },
    },
    runtimeConfig: {
        neteaseCloudMusic: {
            apiBaseUrl: 'https://netease-cloud-music-api-tau-tan.vercel.app/'
        }
    }
})
