export class App {
  constructor(private readonly app: Electron.App) {}

  get isProd(): boolean {
    return this.app.isPackaged;
  }
}
