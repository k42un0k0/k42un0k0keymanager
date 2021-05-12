import { CHANNELS } from './channels';
import type { IpcListenerMap } from './lib/ipc.service';
import { WindowEnum } from './lib/window-manager';
import { iconService, windowManager } from './singleton';

export const windowManagerListener: IpcListenerMap = {
  [CHANNELS.windowManager.close]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.windowManager.auth]: async () => windowManager.createWindow(WindowEnum.auth),
  [CHANNELS.windowManager.main]: async () => windowManager.createWindow(WindowEnum.main),
  [CHANNELS.windowManager.userAccountManager]: async () => windowManager.createWindow(WindowEnum.userAccountManager),
};

export const iconServiceListener: IpcListenerMap = {
  [CHANNELS.iconService.getFromUrl]: async (_, url: string): Promise<string> => iconService.getFromUrl(url),
};
