import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'

process.env.ROOT = path.join(__dirname, '..')
process.env.DIST = path.join(process.env.ROOT, 'dist-electron')
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? path.join(process.env.ROOT, 'public')
    : path.join(process.env.ROOT, '.output/public')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

const preload = path.join(process.env.DIST, 'preload.js')
Menu.setApplicationMenu(null);
const createWindow = () => {
    const win = new BrowserWindow({
        icon:path.join(__dirname,'./public/music.ico'),
        minWidth:1100,
        minHeight:600,
        webPreferences: {
            preload,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
            nodeIntegration: true,
            webSecurity: false,
        },
    })
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        //win.webContents.openDevTools()
    } else {
        win.loadFile(path.join(process.env.VITE_PUBLIC!, 'index.html'))
    }
}

app.whenReady().then(createWindow)
