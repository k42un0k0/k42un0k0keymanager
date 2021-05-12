import { urlUtils } from './url';

describe('url', () => {
  describe('complementProtocol', () => {
    it('complement protocol', () => {
      expect(urlUtils.complementProtocol('//hogehoge.com')).toBe('https://hogehoge.com');
    });
    it('do nothing when take full url', () => {
      expect(urlUtils.complementProtocol('http://hugahuga.com')).toBe('http://hugahuga.com');
      expect(urlUtils.complementProtocol('https://foobar.com')).toBe('https://foobar.com');
    });
  });
});
