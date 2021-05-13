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
  cipherService: {
    async cipher(key: string, plaintext: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.cipherService.cipher, key, plaintext);
    },
    async decipher(key: string, encryptedData: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.cipherService.decipher, key, encryptedData);
    },
  },
  keyService: {
    async findOrCreate(userAccountID: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.findOrCreate, userAccountID);
    },
    async find(userAccountID: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.find, userAccountID);
    },
    async create(userAccountID: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.create, userAccountID);
    },
    async set(userAccountID: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.set, userAccountID);
    },
    async import(): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.import);
    },
    async export(userAccountID: string): Promise<any> {
      return ipcRenderer.invoke(CHANNELS.keyService.export, userAccountID);
    },
  },
};
contextBridge.exposeInMainWorld('main', main);
