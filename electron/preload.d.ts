declare interface Window {
  main: {
    debug: () => void,
    close: () => void,
    window: { auth: () => Promise<void>, main: () => Promise<void>, userAccountManager: () => Promise<void> }
  }
}
