import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';
import { BaseModule } from 'src/app/base/base.module';

export default {
  title: 'base/components/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, BaseModule, MatIconModule, MatButtonModule, CommonModule],
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
  type: 'password',
  value: 'password',
};
