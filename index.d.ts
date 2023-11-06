export { }

declare global {
  interface Window {
    windowOperate: {
      windowClose: () => Promise<void>,
      windowMinimize: () => Promise<void>,
      windowMaximize: () => Promise<void>
    }
  }
}
