import { UrlUtils } from './url';

describe('url', () => {
  describe('complementProtocol', () => {
    it('complement protocol', () => {
      expect(UrlUtils.complementProtocol('//hogehoge.com')).toBe('https://hogehoge.com');
    });
    it('do nothing when take full url', () => {
      expect(UrlUtils.complementProtocol('http://hugahuga.com')).toBe('http://hugahuga.com');
      expect(UrlUtils.complementProtocol('https://foobar.com')).toBe('https://foobar.com');
    });
  });
});
