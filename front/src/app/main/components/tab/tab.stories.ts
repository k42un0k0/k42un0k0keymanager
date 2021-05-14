// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TabComponent } from './tab.component';
import { Tab } from 'src/app/main/services/tab.service';
import { UserAccount } from 'src/models';

export default {
  title: 'main/components/TabComponent',
  component: TabComponent,
  argTypes: {},
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
  tab: new Tab(new UserAccount({ name: 'aaaaaa', OuterAccounts: [] })),
  active: true,
};
