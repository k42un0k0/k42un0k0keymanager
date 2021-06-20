import axios from 'axios';
import jsdom from 'jsdom';
import { IIconService } from 'lib';

export class IconService extends IIconService {
  async getFromUrl(url: string): Promise<string> {
    try {
      const res = await axios.get(url);
      const dom = new jsdom.JSDOM(res.data as string);
      return this._fromShortcutIcon(dom, new URL(url).origin) ?? this._fromNoSetting(new URL(url));
    } catch (e: unknown) {
      return this._fromNoSetting(new URL(url));
    }
  }

  private _fromShortcutIcon(dom: jsdom.JSDOM, origin: string): string | undefined {
    const link = dom.window.document.querySelector<HTMLLinkElement>('link[rel="shortcut icon"]');
    if (link != null && !link.href.includes('http')) {
      if (link.href.startsWith('//')) {
        return 'https:' + link.href;
      }
      if (link.href.startsWith('/')) {
        return origin + link.href;
      }
      return origin + '/' + link.href;
    }
    return link?.href;
  }

  private _fromNoSetting(url: URL): string {
    return url.origin + '/favicon.ico';
  }
}
