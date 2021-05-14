import type { IpcService } from './ipc';
import type { CHANNELS } from 'src/channels';

export abstract class IIconService implements IpcService<typeof CHANNELS.iconService> {
  abstract getFromUrl(url: string): Promise<string>;
}
