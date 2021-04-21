// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MainComponent } from './main.component';
import { ComponentsModule } from './components/components.module';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'main/MainComponent',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {
};
