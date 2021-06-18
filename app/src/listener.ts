import { CHANNELS } from 'lib';
import type { IpcListenerMap } from './lib/ipc.service';
import { WindowEnum } from './lib/window-manager';
import { cipherService, iconService, ipcService, keyService, windowManager, csvService } from './singleton';

const windowManagerListener: IpcListenerMap = {
  [CHANNELS.windowService.close]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.windowService.auth]: async () => windowManager.createWindow(WindowEnum.auth),
  [CHANNELS.windowService.main]: async () => windowManager.createWindow(WindowEnum.main),
  [CHANNELS.windowService.userAccountManager]: async () => windowManager.createWindow(WindowEnum.userAccountManager),
};

const iconSerciseListener = ipcService.createListhenerMap(CHANNELS.iconService, iconService);
const keySerciseListener = ipcService.createListhenerMap(CHANNELS.keyService, keyService);
const csvSerciseListener = ipcService.createListhenerMap(CHANNELS.csvService, csvService);
const cipherSerciseListener = ipcService.createListhenerMap(CHANNELS.cipherService, cipherService, {
  syncFunc: ['cipher', 'decipher'],
});

export const listener = {
  ...windowManagerListener,
  ...keySerciseListener,
  ...iconSerciseListener,
  ...cipherSerciseListener,
  ...csvSerciseListener,
};
