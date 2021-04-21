// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'main/components/TabComponent',
  component: TabComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tabItem: { title: "hello", link: "/unko" }
};

export const Active = Template.bind({});
Active.args = {
  tabItem: { title: "hello", link: "/unko" },
  active: true
};