export interface IKeyService {
  find: (userAccountID: string) => Promise<string | null>;

  create: (userAccountID: string) => Promise<string>;

  set: (userAccountID: string, key: string) => Promise<void>;

  export: (userAccountID: string) => Promise<void>;

  import: (userAccountID: string) => Promise<void>;
}
