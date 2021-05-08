import { ipcMain } from 'electron';
type IpcListener = (e: Electron.IpcMainInvokeEvent, ...args: any[]) => void;

export type IpcListenerMap = { [key: string]: IpcListener };

export class IpcService {
  constructor() {}

  addEventListener(key: string, listener: IpcListener): void;
  addEventListener(obj: IpcListenerMap): void;
  addEventListener(keyOrObj: string | IpcListenerMap, listner?: any): void {
    if (typeof keyOrObj == 'string') {
      ipcMain.handle(keyOrObj, listner);
    } else {
      Object.entries(keyOrObj).forEach(([key, value]: [string, IpcListener]) => {
        this.addEventListener(key, value);
      });
    }
  }
}
