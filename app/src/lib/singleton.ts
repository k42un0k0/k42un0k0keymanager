import { app as electronApp } from 'electron';
import { App } from './app';
import { EmitterManager } from './emitter/emitter-manager';
import { IpcService } from './ipc.service';
import { CipherService } from './listener/cipher.service';
import { IconService } from './listener/icon.service';
import { KeyService } from './listener/key.service';
import { WindowManager } from './window/window-manager';

export const app = new App(electronApp);
export const emitterManager: EmitterManager = new EmitterManager();
export const windowManager: WindowManager = new WindowManager(emitterManager);
export const ipcService: IpcService = new IpcService();
export const iconService: IconService = new IconService();
export const cipherService: CipherService = new CipherService();
export const keyService: KeyService = new KeyService(cipherService);
