import { Injectable } from '@angular/core';
import { CHANNELS, IExportService } from 'lib';

@Injectable({
  providedIn: 'root',
})
export class ExportService extends IExportService {
  constructor(private window: Window) {
    super();
  }
  export(data: string): Promise<void> {
    return this.window.main.ipcRenderer.invoke(CHANNELS.exportService.export, data);
  }
}
