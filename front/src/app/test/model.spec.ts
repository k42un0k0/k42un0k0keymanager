import { mockOuterAccount } from 'src/app/test/model';

describe('mockOuterAccount', () => {
  it('circular dependencies', () => {
    const outerAccount = mockOuterAccount();
    expect(outerAccount.userAccount.OuterAccounts[0]?.id).toBe(outerAccount.id);
  });
});
