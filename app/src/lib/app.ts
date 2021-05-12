export class App {
  public constructor(private readonly app: Electron.App) {}

  public get isProd(): boolean {
    return this.app.isPackaged;
  }
}
