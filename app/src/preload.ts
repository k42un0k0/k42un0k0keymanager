import { contextBridge, ipcRenderer } from 'electron';
import { CHANNELS } from 'lib';

const main = {
  windowService: {
    async close(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowService.close);
    },
    async auth(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowService.auth);
    },
    async userAccountManager(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowService.userAccountManager);
    },
    async main(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowService.main);
    },
  },
  ipcRenderer,
};

contextBridge.exposeInMainWorld('main', main);
