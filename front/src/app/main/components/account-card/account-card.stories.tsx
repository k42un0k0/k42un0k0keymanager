import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OuterAccount, UserAccount } from 'src/models';
import { AccountCardComponent } from './account-card.component';

export default {
  title: 'main/components/AccountCardComponent',
  component: AccountCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, RouterTestingModule],
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
