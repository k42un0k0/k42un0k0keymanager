import { contextBridge, ipcRenderer } from 'electron';
import { EVENTS } from './events';

contextBridge.exposeInMainWorld("process", { env: { ...process.env } });
contextBridge.exposeInMainWorld("main", {
  debug: () => ipcRenderer.send(EVENTS.DEBUG),
  close: () => ipcRenderer.send("close"),
  window: { auth: () => ipcRenderer.send(EVENTS.OPEN_WINDOW.AUTH), userAccountManager: () => ipcRenderer.send(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER) }
});
