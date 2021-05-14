/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CHANNELS } from 'lib';
import type { IpcListenerMap } from './lib/ipc.service';
import { WindowEnum } from './lib/window-manager';
import { cipherService, iconService, keyService, windowManager } from './singleton';

export const windowManagerListener: IpcListenerMap = {
  [CHANNELS.windowService.close]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.windowService.auth]: async () => windowManager.createWindow(WindowEnum.auth),
  [CHANNELS.windowService.main]: async () => windowManager.createWindow(WindowEnum.main),
  [CHANNELS.windowService.userAccountManager]: async () => windowManager.createWindow(WindowEnum.userAccountManager),
};

function createListhener<T extends Record<string, string>>(
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
    const listener = (e: any, ...args: any[]): any => {
      let returnValue: any;
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

export const iconSerciseListener = createListhener(CHANNELS.iconService, iconService);
export const keySerciseListener = createListhener(CHANNELS.keyService, keyService);
export const cipherSerciseListener = createListhener(CHANNELS.cipherService, cipherService, {
  syncFunc: ['cipher', 'decipher'],
});
