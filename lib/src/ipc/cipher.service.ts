import type { IpcService } from './ipc';
import type { CHANNELS } from 'src/channels';

export abstract class ICipherService implements IpcService<typeof CHANNELS.cipherService> {
  abstract cipher(key: string, plaintext: string): string;

  abstract decipher(key: string, encryptedData: string): string;
}
