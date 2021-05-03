import { IpcListenerMap } from "./lib/ipc.service";
import { EVENTS } from "./events";
import { WindowEnum } from "./lib/window-manager";
import { windowManager } from "./singleton";

export const windowManagerListener: IpcListenerMap = {
  [EVENTS.CLOSE]: (e) => {
    windowManager.closeWindow(e.sender.id);
  },
  [EVENTS.OPEN_WINDOW.AUTH]: (e) => {
    return windowManager.createWindow(WindowEnum.auth);
  },
  [EVENTS.OPEN_WINDOW.MAIN]: (e) => {
    return windowManager.createWindow(WindowEnum.main);
  },
  [EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER]: (e) => {
    return windowManager.createWindow(WindowEnum.userAccountManager);
  },
};
