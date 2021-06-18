import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class ICsvService implements IpcService<typeof CHANNELS.csvService> {
  abstract parse(s: string): Promise<any>;
}
