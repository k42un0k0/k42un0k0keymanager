import { ipcMain } from 'electron';

type IpcListener = (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any;

export type IpcListenerMap = Record<string, IpcListener>;

export class IpcService {
  addEventListener(key: string, listener: IpcListener): void;

  addEventListener(obj: IpcListenerMap): void;

  addEventListener(keyOrObj: IpcListenerMap | string, listner?: IpcListener): void {
    if (typeof keyOrObj === 'string' && listner) {
      ipcMain.handle(keyOrObj, listner);
    } else {
      Object.entries(keyOrObj).forEach(([key, value]: [string, IpcListener]) => {
        this.addEventListener(key, value);
      });
    }
  }
}
