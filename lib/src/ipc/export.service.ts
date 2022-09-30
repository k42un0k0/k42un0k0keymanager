import type { CHANNELS } from '../channels';
import type { IpcService } from './ipc';

export abstract class IExportService implements IpcService<typeof CHANNELS.exportService> {
  abstract export(data: string): Promise<void>;
}
