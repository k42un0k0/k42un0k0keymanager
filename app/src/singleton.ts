import { IconService } from './lib/icon.service';
import { app as electronApp } from 'electron';
import { App } from './lib/app';
import { IpcService } from './lib/ipc.service';
import { WindowManager } from './lib/window-manager';

export const app = new App(electronApp);
export const windowManager: WindowManager = new WindowManager(app);
export const ipcService: IpcService = new IpcService();
export const iconService: IconService = new IconService();
