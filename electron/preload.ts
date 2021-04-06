import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("process", { env: { ...process.env } });
contextBridge.exposeInMainWorld("main", {
    debug: () => ipcRenderer.send("debug")
});