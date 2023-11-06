const userAgent = navigator.userAgent.toLowerCase();
export const useElectronStore = defineStore('electron', {
    state: () => ({
        isElectron: userAgent.indexOf(' electron/') > -1
    })
})