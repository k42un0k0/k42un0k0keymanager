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
    takeEventFunc: (keyof T)[];
  }
): IpcListenerMap {
  return Object.entries<string>(channel).reduce<IpcListenerMap>((pre, [key, value]) => {
    pre[value] = (e: any, ...args: any[]): any => {
      if (options?.takeEventFunc.find((v) => v === key) != null) {
        return service[key as keyof T](e, ...args);
      } else {
        return service[key as keyof T](...args);
      }
    };
    return pre;
  }, {});
}

export const iconSerciseListener = createListhener(CHANNELS.iconService, iconService);
export const keySerciseListener = createListhener(CHANNELS.keyService, keyService);
export const cipherSerciseListener = createListhener(CHANNELS.cipherService, cipherService);
