import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OuterAccount, UserAccount } from 'src/models';
import { AccountCardComponent } from './account-card.component';
import { ComponentsModule } from 'src/app/main/components/components.module';

export default {
  title: 'main/components/AccountCardComponent',
  component: AccountCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<AccountCardComponent> = (args: AccountCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  account: new OuterAccount({
    providerName: 'Twitter',
    iconPath: '',
    userId: 'k42un0k0',
    link: '',
    password: '',
    userAccount: new UserAccount({ name: 'aaa', OuterAccounts: [] }),
  }),
};

export const List = (args: AccountCardComponent) => ({
  props: args,
  template: `<div style="display: flex;flex-wrap: wrap;">
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
    <app-account-card [account]="account"></app-account-card>
  </div>`,
});
List.args = {
  account: new OuterAccount({
    providerName: 'Twitter',
    iconPath: '',
    userId: 'k42un0k0',
    link: '',
    password: '',
    userAccount: new UserAccount({ name: 'aaa', OuterAccounts: [] }),
  }),
};
