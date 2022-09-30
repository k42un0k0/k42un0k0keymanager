import { app as electronApp } from 'electron';
import { CipherService } from './ipc/cipher.service';
import { ExportService } from './ipc/export.service';
import { IconService } from './ipc/icon.service';
import { KeyService } from './ipc/key.service';
import { App } from './lib/app';
import { IpcService } from './lib/ipc.service';
import { WindowManager } from './lib/window-manager';

export const app = new App(electronApp);
export const windowManager: WindowManager = new WindowManager(app);
export const ipcService: IpcService = new IpcService();
export const iconService: IconService = new IconService();
export const cipherService: CipherService = new CipherService();
export const keyService: KeyService = new KeyService(cipherService);
export const exportService: ExportService = new ExportService(cipherService);
