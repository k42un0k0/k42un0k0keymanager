import { UrlUtils } from './url';

describe('url', () => {
  it('complementProtocol', () => {
    expect(UrlUtils.complementProtocol('//hogehoge.com')).toBe('https://hogehoge.com');
    expect(UrlUtils.complementProtocol('http://hugahuga.com')).toBe('http://hugahuga.com');
    expect(UrlUtils.complementProtocol('https://foobar.com')).toBe('https://foobar.com');
  });
});
