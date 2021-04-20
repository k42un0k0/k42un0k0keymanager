import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserAccount {
  readonly id: string;
  readonly token: string;
  readonly name: string;
  readonly OuterAccounts?: (OuterAccount | null)[];
  constructor(init: ModelInit<UserAccount>);
  static copyOf(source: UserAccount, mutator: (draft: MutableModel<UserAccount>) => MutableModel<UserAccount> | void): UserAccount;
}

export declare class OuterAccount {
  readonly id: string;
  readonly providerName: string;
  readonly iconPath: string;
  readonly userId: string;
  readonly link: string;
  readonly password: string;
  readonly userAccount?: UserAccount;
  constructor(init: ModelInit<OuterAccount>);
  static copyOf(source: OuterAccount, mutator: (draft: MutableModel<OuterAccount>) => MutableModel<OuterAccount> | void): OuterAccount;
}