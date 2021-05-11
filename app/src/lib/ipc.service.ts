import { ipcMain } from 'electron';

type IpcListener = Parameters<typeof ipcMain.handle>[1];

export type IpcListenerMap = { [key: string]: IpcListener };

export class IpcService {
  addEventListener(key: string, listener: IpcListener): void;

  addEventListener(obj: IpcListenerMap): void;

  addEventListener(keyOrObj: string | IpcListenerMap, listner?: IpcListener): void {
    if (typeof keyOrObj === 'string' && listner) {
      ipcMain.handle(keyOrObj, listner);
    } else {
      Object.entries(keyOrObj).forEach(([key, value]: [string, IpcListener]) => {
        this.addEventListener(key, value);
      });
    }
  }
}
