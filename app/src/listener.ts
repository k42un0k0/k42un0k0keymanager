import { CHANNELS } from './../../lib/src/channels';
import type { IpcListenerMap } from './lib/ipc.service';
import { WindowEnum } from './lib/window-manager';
import { cipherService, iconService, keyService, windowManager } from './singleton';

export const windowManagerListener: IpcListenerMap = {
  [CHANNELS.windowManager.close]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.windowManager.auth]: async () => {
    try {
      await windowManager.createWindow(WindowEnum.auth);
    } catch (e: unknown) {
      console.log(e);
    }
  },
  [CHANNELS.windowManager.main]: async () => {
    try {
      await windowManager.createWindow(WindowEnum.main);
    } catch (e: unknown) {
      console.log(e);
    }
  },
  [CHANNELS.windowManager.userAccountManager]: async () => windowManager.createWindow(WindowEnum.userAccountManager),
};

function createListhener<T>(t: T, s: Record<keyof T, (...args: any[]) => any>): IpcListenerMap {
  return Object.keys(t).reduce<IpcListenerMap>((pre, key) => {
    pre[key] = (...args: any[]): any => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      s[key as keyof T](...args);
    };
    return pre;
  }, {});
}

export const iconSerciseListener = createListhener(CHANNELS.iconService, iconService);
export const keySerciseListener = createListhener(CHANNELS.keyService, keyService);
export const cipherSerciseListener = createListhener(CHANNELS.cipherService, cipherService);
