import { IconService } from './icon.service';

describe('icon.service', () => {
  let service: IconService;
  beforeEach(() => {
    service = new IconService();
  });
  describe('getFromUrl', () => {
    it('get from link tag', async () => {
      expect(await service.getFromUrl('http://twitter.com/login')).toEqual(
        'https://abs.twimg.com/favicons/twitter.ico'
      );
    });
    it('compute favicon link', async () => {
      expect(await service.getFromUrl('http://example.com/login')).toEqual('http://example.com/favicon.ico');
    });
  });
});
