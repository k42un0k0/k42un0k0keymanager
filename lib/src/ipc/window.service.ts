import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class IWindowService implements IpcService<typeof CHANNELS.windowService> {
  abstract auth(): Promise<void>;

  abstract main(): Promise<void>;

  abstract userAccountManager(): Promise<void>;

  abstract close(): Promise<void>;
}
