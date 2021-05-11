import { CHANNELS } from './channels';
import { IpcListenerMap } from './lib/ipc.service';
import { WindowEnum } from './lib/window-manager';
import { iconService, windowManager } from './singleton';

export const windowManagerListener: IpcListenerMap = {
  [CHANNELS.WINDOW_MANAGER.CLOSE]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.WINDOW_MANAGER.AUTH]: () => windowManager.createWindow(WindowEnum.auth),
  [CHANNELS.WINDOW_MANAGER.MAIN]: () => windowManager.createWindow(WindowEnum.main),
  [CHANNELS.WINDOW_MANAGER.USER_ACCOUNT_MANAGER]: () => windowManager.createWindow(WindowEnum.userAccountManager),
};

export const iconServiceListener: IpcListenerMap = {
  [CHANNELS.ICON_SERVICE.GET_FROM_URL]: (_, url: string): Promise<string> => iconService.getFromUrl(url),
};
