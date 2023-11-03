import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('windowOperate', {
    windowClose: () => ipcRenderer.invoke('window-close')
})