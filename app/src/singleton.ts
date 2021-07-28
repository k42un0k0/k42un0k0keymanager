import { app as electronApp } from 'electron';
import { CipherService } from './ipc/cipher.service';
import { IconService } from './ipc/icon.service';
import { KeyService } from './ipc/key.service';
import { App } from './lib/app';
import { IpcService } from './lib/ipc.service';
import { WindowManager } from './lib/window-manager';
import { EmitterManager } from 'src/lib/emitter-manager';

export const app = new App(electronApp);
export const emitterManager: EmitterManager = new EmitterManager();
export const windowManager: WindowManager = new WindowManager(emitterManager);
export const ipcService: IpcService = new IpcService();
export const iconService: IconService = new IconService();
export const cipherService: CipherService = new CipherService();
export const keyService: KeyService = new KeyService(cipherService);
