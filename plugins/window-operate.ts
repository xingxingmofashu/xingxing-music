export default defineNuxtPlugin(async () => {
    const { windowClose, windowMinimize, windowMaximize } = window.windowOperate;
    return {
        provide: {
            windowClose,
            windowMinimize,
            windowMaximize
        }
    }
})