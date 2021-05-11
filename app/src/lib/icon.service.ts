import axios from 'axios';
import jsdom from 'jsdom';

export class IconService {
  async getFromUrl(url: string): Promise<string> {
    try {
      const res = await axios.get(url);
      const dom = new jsdom.JSDOM(res.data);
      const a = this._fromShortcutIcon(dom);
      return a || '';
    } catch (e) {
      console.error(e);
      return '';
    }
  }

  private _fromShortcutIcon(dom: jsdom.JSDOM): string | undefined {
    const link = dom.window.document.querySelector<HTMLLinkElement>('link[rel="shortcut icon"]');

    return link?.href;
  }
}
