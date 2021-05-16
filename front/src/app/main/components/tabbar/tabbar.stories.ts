// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabbarComponent } from './tabbar.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { TestModule } from 'src/app/test/test.module';

export default {
  title: 'main/components/TabbarComponent',
  component: TabbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule, TestModule],
    }),
  ],
} as Meta;

const Template: Story<TabbarComponent> = (args: TabbarComponent) => ({
  props: {
    ...args,
    clickHome: action('home'),
  },
});

export const Primary = Template.bind({});
Primary.args = {};
