import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class IIconService implements IpcService<typeof CHANNELS.iconService> {
  abstract getFromUrl(url: string): Promise<string>;
}
