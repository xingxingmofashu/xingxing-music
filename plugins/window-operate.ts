export default defineNuxtPlugin(async () => {
    const windowClose = window.windowOperate.windowClose
    return {
        provide: {
            windowClose
        }
    }
})