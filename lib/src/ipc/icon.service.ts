export interface IIconService {
  getFromUrl: (url: string) => Promise<string>;
}
