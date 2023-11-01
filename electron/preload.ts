import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('windowOperate', {
    //close: ipcRenderer.invoke('window-close')
    ping: () => ipcRenderer.invoke('ping')
})

console.log('preload')