// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { UserAccount } from 'src/models';
import { Tab } from '../../services/tab.service';
import { TabComponent } from './tab.component';

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
Primary.args = {};

export const Active = Template.bind({});
Active.args = {
  tab: new Tab(new UserAccount({ name: 'aaaaaa', token: '', OuterAccounts: [] })),
  active: true,
};
