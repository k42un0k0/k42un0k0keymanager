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
    cipherService: {
      cipher(key: string, plaintext: string): Promise<string>;
      decipher(key: string, encryptedData: string): Promise<string>;
    };
    keyService: {
      findOrCreate(userAccountID: string): Promise<string>;
      find(userAccountID: string): Promise<string | null>;
      create(userAccountID: string): Promise<string>;
      set(userAccountID: string, key: string): Promise<void>;
      import(): Promise<void>;
      export(userAccountID: string): Promise<void>;
    };
  };
}
