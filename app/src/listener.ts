import { CHANNELS } from './channels';
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

export const iconServiceListener: IpcListenerMap = {
  [CHANNELS.iconService.getFromUrl]: async (_, url: string): Promise<string> => iconService.getFromUrl(url),
};

export const cipherServiceListener: IpcListenerMap = {
  [CHANNELS.cipherService.cipher]: async (_, key: string, plaintext: string): Promise<string> =>
    Promise.resolve(cipherService.cipher(key, plaintext)),
  [CHANNELS.cipherService.decipher]: async (_, key: string, encyptedData: string): Promise<string> =>
    Promise.resolve(cipherService.decipher(key, encyptedData)),
};

export const keyServiceListener: IpcListenerMap = {
  [CHANNELS.keyService.findOrCreate]: async (_, userAccountID: string): Promise<string> =>
    keyService.findOrCreate(userAccountID),
  [CHANNELS.keyService.find]: async (_, userAccountID: string): Promise<string | null> =>
    keyService.find(userAccountID),
  [CHANNELS.keyService.create]: async (_, userAccountID: string): Promise<string> => keyService.create(userAccountID),
  [CHANNELS.keyService.set]: async (_, userAccountID: string, key: string): Promise<void> =>
    keyService.set(userAccountID, key),
  [CHANNELS.keyService.import]: async (_, userAccountID: string): Promise<void> => keyService.import(userAccountID),
  [CHANNELS.keyService.export]: async (_, userAccountID: string): Promise<void> => keyService.export(userAccountID),
};
