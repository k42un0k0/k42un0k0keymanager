// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'auth/base/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'ButtonComponent',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ButtonComponent',
};

export const Large = Template.bind({});
Large.args = {
  label: 'ButtonComponent',
};

export const Small = Template.bind({});
Small.args = {
  label: 'ButtonComponent',
};
