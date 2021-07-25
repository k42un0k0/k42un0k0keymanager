import userEvent from '@testing-library/user-event';
import { OuterAccount, UserAccount } from 'src/models';

export function mockUserAccount(init: Partial<UserAccount> = {}) {
  return new UserAccount({ name: 'k42un0k0', OuterAccounts: [], ...init });
}
export function mockOuterAccount(init: Partial<OuterAccount> = {}) {
  let userAccount = mockUserAccount();
  const outerAccount = new OuterAccount({
    providerName: 'aws',
    userId: 'foobar',
    password: 'hogehoge',
    link: '',
    iconPath: '',
    userAccount: userAccount,
    ...init,
  });
  userAccount = UserAccount.copyOf(userAccount, (u) => {
    u.OuterAccounts.push(outerAccount);
  });
  return OuterAccount.copyOf(outerAccount, (o) => {
    o.userAccount = userAccount;
  });
}
