// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingComponent } from './setting.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BaseModule } from 'src/app/base/base.module';
import { ComponentsModule } from '../components/components.module';

export default {
  title: 'user-account-manager/SettingComponent',
  component: SettingComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, MatButtonModule, FormsModule, BaseModule, ComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<SettingComponent> = (args: SettingComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {
};
