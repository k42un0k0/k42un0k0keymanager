import type { IpcService } from './ipc';
import type { CHANNELS } from 'src/channels';

export abstract class IWindowService implements IpcService<typeof CHANNELS.windowService> {
  abstract auth(): Promise<void>;

  abstract main(): Promise<void>;

  abstract userAccountManager(): Promise<void>;

  abstract close(): Promise<void>;
}
