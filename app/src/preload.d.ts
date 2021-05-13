/// <reference types="electron" />
declare interface Window {
  main: {
    windowManager: {
      close(): Promise<void>;
      auth(): Promise<void>;
      userAccountManager(): Promise<void>;
      main(): Promise<void>;
    };
    ipcRenderer: Electron.IpcRenderer;
  };
}
