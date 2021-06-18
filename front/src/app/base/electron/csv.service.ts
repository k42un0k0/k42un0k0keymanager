import { Injectable } from '@angular/core';
import { CHANNELS, ICsvService } from 'lib';

@Injectable({
  providedIn: 'root',
})
export class CsvService extends ICsvService {
  parse(s: string): Promise<any> {
    return this.window.main.ipcRenderer.invoke(CHANNELS.csvService.parse, s);
  }
  constructor(private window: Window) {
    super();
  }
}
