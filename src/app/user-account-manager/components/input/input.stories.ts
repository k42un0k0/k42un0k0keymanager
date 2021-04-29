// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BaseModule } from 'src/app/base/base.module';
import { InputComponent } from './input.component';

export default {
  title: 'user-account-manager/components/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, BaseModule],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'InputComponent',
  autoFocus: false,
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'InputComponent',
  autoFocus: true,
};
