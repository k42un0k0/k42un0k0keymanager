export class App {
  constructor(private app: Electron.App) {}

  get isProd(): boolean {
    return this.app.isPackaged;
  }
}
