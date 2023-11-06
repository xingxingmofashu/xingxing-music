import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('windowOperate', {
    windowClose: () => ipcRenderer.invoke('window-close'),
    windowMaximize: () => ipcRenderer.invoke('window-maximize'),
    windowMinimize: () => ipcRenderer.invoke('window-minimize')
})