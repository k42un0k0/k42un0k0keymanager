import axios from 'axios';
import jsdom from 'jsdom';
import { IIconService } from 'lib';

export class IconService extends IIconService {
  async getFromUrl(url: string): Promise<string> {
    try {
      const res = await axios.get(url);
      const dom = new jsdom.JSDOM(res.data as string);
      return this._fromShortcutIcon(dom) ?? this._fromNoSetting(new URL(url));
    } catch (e: unknown) {
      return this._fromNoSetting(new URL(url));
    }
  }

  private _fromShortcutIcon(dom: jsdom.JSDOM): string | undefined {
    const link = dom.window.document.querySelector<HTMLLinkElement>('link[rel="shortcut icon"]');
    return link?.href;
  }

  private _fromNoSetting(url: URL): string {
    return url.origin + '/favicon.ico';
  }
}
