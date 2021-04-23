// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAccountSettingComponent } from './user-account-setting.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BaseModule } from 'src/app/base/base.module';

export default {
  title: 'user-account-manager/UserAccountSettingComponent',
  component: UserAccountSettingComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, MatButtonModule, FormsModule, BaseModule],
    }),
  ],
} as Meta;

const Template: Story<UserAccountSettingComponent> = (args: UserAccountSettingComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {
};
