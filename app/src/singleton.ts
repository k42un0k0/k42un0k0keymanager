import { app as electronApp } from 'electron';
import { App } from './lib/app';
import { CipherService } from './lib/cipher.service';
import { IconService } from './lib/icon.service';
import { IpcService } from './lib/ipc.service';
import { KeyService } from './lib/key.service';
import { WindowManager } from './lib/window-manager';

export const app = new App(electronApp);
export const windowManager: WindowManager = new WindowManager(app);
export const ipcService: IpcService = new IpcService();
export const iconService: IconService = new IconService();
export const cipherService: CipherService = new CipherService();
export const keyService: KeyService = new KeyService(windowManager, cipherService);
