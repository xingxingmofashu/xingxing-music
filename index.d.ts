export { }

declare global {
  interface Window {
    windowOperate: {
      windowClose: () => Promise<void>
    }
  }
}
