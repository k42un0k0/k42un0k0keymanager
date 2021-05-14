/// <reference types="electron" />
declare interface Window {
  main: {
    windowService: {
      close(): Promise<void>;
      auth(): Promise<void>;
      userAccountManager(): Promise<void>;
      main(): Promise<void>;
    };
    ipcRenderer: Electron.IpcRenderer;
  };
}
