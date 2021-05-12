/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from 'path';

export function loadElectronReload(): void {
  require('electron-reload')(path.join(__dirname, 'main.js'), {
    electron: require(path.join(__dirname, '../../node_modules/electron')),
  });
}
