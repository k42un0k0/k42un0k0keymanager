import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class ICipherService implements IpcService<typeof CHANNELS.cipherService> {
  abstract cipher(key: string, plaintext: string): string;

  abstract decipher(key: string, encryptedData: string): string;
}
