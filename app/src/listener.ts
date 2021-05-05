import { IpcListenerMap } from "./lib/ipc.service";
import { CHANNELS } from "./channels";
import { WindowEnum } from "./lib/window-manager";
import { windowManager, iconService } from "./singleton";

export const windowManagerListener: IpcListenerMap = {
  [CHANNELS.WINDOW_MANAGER.CLOSE]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [CHANNELS.WINDOW_MANAGER.AUTH]: (_) => {
    return windowManager.createWindow(WindowEnum.auth);
  },
  [CHANNELS.WINDOW_MANAGER.MAIN]: (_) => {
    return windowManager.createWindow(WindowEnum.main);
  },
  [CHANNELS.WINDOW_MANAGER.USER_ACCOUNT_MANAGER]: (_) => {
    return windowManager.createWindow(WindowEnum.userAccountManager);
  },
};

export const iconServiceListener: IpcListenerMap = {
  [CHANNELS.ICON_SERVICE.GET_FROM_URL]: (_, url: string): Promise<string> => {
    return iconService.getFromUrl(url);
  },
};
