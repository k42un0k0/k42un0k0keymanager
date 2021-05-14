import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'auth/components/InputComponent',
  component: InputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'InputComponent',
};

export const Password = Template.bind({});
Password.args = {
  label: 'InputComponent',
  type: 'password',
  value: 'password',
};
