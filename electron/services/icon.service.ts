import axios from 'axios';
export class IconService {
  constructor() {}
  async getFromUrl(url: string) {
    try {
      const res = await axios.get(url);
      return res;
    } catch (e) {
      console.error(e);
      return '';
    }
  }
}
