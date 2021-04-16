// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
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
      imports: [FormsModule],
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

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'InputComponent',
};

export const Large = Template.bind({});
Large.args = {
  label: 'InputComponent',
};

export const Small = Template.bind({});
Small.args = {
  label: 'InputComponent',
};
