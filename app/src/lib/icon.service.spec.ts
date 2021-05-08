import { IconService } from './icon.service';
describe('icon.service', () => {
  const service = new IconService();
  it('get', async () => {
    expect(await service.getFromUrl('http://twitter.com/login')).toEqual('unkoman');
  });
});
