import { contextBridge, ipcRenderer } from 'electron';
import { CHANNELS } from './channels';

contextBridge.exposeInMainWorld('process', { env: { ...process.env } });

const main = {
  windowManager: {
    async close(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowManager.close);
    },
    async auth(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowManager.auth);
    },
    async userAccountManager(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowManager.userAccountManager);
    },
    async main(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.windowManager.main);
    },
  },
  iconService: {
    async getFromUrl(url: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.iconService.getFromUrl, url);
    },
  },
};
contextBridge.exposeInMainWorld('main', main);
