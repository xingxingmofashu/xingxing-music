const userAgent = navigator.userAgent.toLowerCase();
const isElectron = userAgent.indexOf(' electron/') > -1;
export default defineNuxtPlugin(() => {
    if (isElectron) {
        const { windowClose, windowMinimize, windowMaximize } = window.windowOperate;
        return {
            provide: {
                windowClose,
                windowMinimize,
                windowMaximize
            }
        }
    }
})