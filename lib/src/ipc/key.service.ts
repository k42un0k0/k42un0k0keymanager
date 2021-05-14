import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class IKeyService implements IpcService<typeof CHANNELS.keyService> {
  abstract find(userAccountID: string): Promise<string | null>;

  abstract create(userAccountID: string): Promise<string>;

  abstract set(userAccountID: string, key: string): Promise<void>;

  abstract export(userAccountID: string): Promise<void>;

  abstract import(userAccountID: string): Promise<void>;
}
