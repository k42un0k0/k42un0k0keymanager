export const UrlUtils = {
  complementProtocol(url: string): string {
    if (url.slice(0, 2) === '//') {
      return 'https:' + url;
    }
    return url;
  },
};
