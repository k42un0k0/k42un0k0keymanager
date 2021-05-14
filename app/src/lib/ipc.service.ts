/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { ipcMain } from 'electron';

interface IpcListener {
  isSync?: boolean;
  (event: Electron.IpcMainInvokeEvent, ...args: any[]): any;
}

export type IpcListenerMap = Record<string, IpcListener>;

export class IpcService {
  addEventListener(key: string, listener: IpcListener): void;

  addEventListener(obj: IpcListenerMap): void;

  addEventListener(keyOrObj: IpcListenerMap | string, listener?: IpcListener): void {
    if (typeof keyOrObj === 'string') {
      if (listener) {
        if (listener.isSync ?? false) ipcMain.on(keyOrObj, listener);
        else ipcMain.handle(keyOrObj, listener);
      }
    } else {
      Object.entries(keyOrObj).forEach(([key, value]) => {
        this.addEventListener(key, value);
      });
    }
  }

  createListhenerMap<T extends Record<string, string>>(
    channel: T,
    service: Record<keyof T, (...args: any[]) => any>,
    options?: {
      takeEventFunc?: (keyof T)[];
      syncFunc?: (keyof T)[];
    }
  ): IpcListenerMap {
    return Object.entries<string>(channel).reduce<IpcListenerMap>((pre, [key, value]) => {
      const isTakeEvent = options?.takeEventFunc?.find((v) => v === key) != null;
      const isSync = options?.syncFunc?.find((v) => v === key) != null;
      const listener: IpcListener = (e: any, ...args: any[]): any => {
        let returnValue: any = undefined;
        if (isTakeEvent) {
          returnValue = service[key as keyof T](e, ...args);
        } else {
          returnValue = service[key as keyof T](...args);
        }

        if (isSync) {
          e.returnValue = returnValue;
          return;
        }
        return returnValue;
      };
      listener.isSync = isSync;
      pre[value] = listener;
      return pre;
    }, {});
  }
}
