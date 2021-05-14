export const urlUtils = {
  complementProtocol(url: string): string {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
    return url;
  },
};
