import { app, BrowserWindow, ipcMain } from 'electron'
import { resolve } from 'path'

const root = resolve(__dirname, '..');
const distElectron = resolve(root, 'dist-electron');
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;

const VITE_PUBLIC = VITE_DEV_SERVER_URL
    ? resolve(root, 'public')
    : resolve(root, '.output/public')

const preload = resolve(distElectron, 'preload.js')

const createWindow = () => {
    const win = new BrowserWindow({
        icon: resolve(__dirname, '..', './public/music.ico'),
        minWidth: 1100,
        minHeight: 600,
        frame: false,
        webPreferences: {
            preload,
            nodeIntegrationInWorker: true,
            contextIsolation: true,
            nodeIntegration: true,
            webSecurity: false,
        },
    })
    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
        win.webContents.openDevTools()
    } else {
        win.loadFile(resolve(VITE_PUBLIC!, 'index.html'))
    }

    ipcMain.handle('window-close', () => {
        win.close();
    })
    ipcMain.handle('window-minimize', () => {
        win.minimize();
    })
    ipcMain.handle('window-maximize', () => {
        if (win.isMaximized())
            win.restore()
        else
            win.maximize();
    })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.whenReady().then(() => {
    createWindow()
})

