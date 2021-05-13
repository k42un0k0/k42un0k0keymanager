import { Injectable } from '@angular/core';
import { CHANNELS, ICipherService } from 'lib';

@Injectable({
  providedIn: 'root',
})
export class CipherService implements ICipherService {
  cipher(key: string, plaintext: string): string {
    return window.main.ipcRenderer.sendSync(CHANNELS.cipherService.cipher, key, plaintext);
  }
  decipher(key: string, encryptedData: string): string {
    return window.main.ipcRenderer.sendSync(CHANNELS.cipherService.decipher, key, encryptedData);
  }
}
