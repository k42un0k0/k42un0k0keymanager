import { Injectable } from '@angular/core';
import { CHANNELS, IIconService } from 'lib';

@Injectable({
  providedIn: 'root',
})
export class IconService implements IIconService {
  getFromUrl(url: string): Promise<string> {
    return window.main.ipcRenderer.invoke(CHANNELS.iconService.getFromUrl, url);
  }
}
