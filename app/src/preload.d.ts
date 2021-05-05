declare interface Window {
  main: {
    windowManager: {
      close(): Promise<void>;
      auth(): Promise<void>;
      userAccountManager(): Promise<void>;
      main(): Promise<void>;
    };
    iconService: {
      getFromUrl(url: string): Promise<string>;
    };
  };
}
