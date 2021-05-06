import { contextBridge, ipcRenderer } from "electron";
import { CHANNELS } from "./channels";

contextBridge.exposeInMainWorld("process", { env: { ...process.env } });

const main = {
  windowManager: {
    close() {
      return ipcRenderer.invoke(CHANNELS.WINDOW_MANAGER.CLOSE);
    },
    auth() {
      return ipcRenderer.invoke(CHANNELS.WINDOW_MANAGER.AUTH);
    },
    userAccountManager() {
      return ipcRenderer.invoke(CHANNELS.WINDOW_MANAGER.USER_ACCOUNT_MANAGER);
    },
    main() {
      return ipcRenderer.invoke(CHANNELS.WINDOW_MANAGER.MAIN);
    },
  },
  iconService: {
    getFromUrl(url: string) {
      return ipcRenderer.invoke(CHANNELS.ICON_SERVICE.GET_FROM_URL, url);
    },
  },
};
contextBridge.exposeInMainWorld("main", main);
