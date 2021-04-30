// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseModule } from '../base/base.module';

export default {
  title: 'user-account-manager/UserAccountManagerComponent',
  component: UserAccountManagerComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, MatIconModule, MatButtonModule, BaseModule],
    }),
  ],
} as Meta;

const Template: Story<UserAccountManagerComponent> = (args: UserAccountManagerComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {};
