// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TabComponent } from './tab.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { Tab } from 'src/app/main/services/tab.service';
import { UserAccount } from 'src/models';

export default {
  title: 'main/components/TabComponent',
  component: TabComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tab: new Tab(new UserAccount({ name: 'aaaaaa', OuterAccounts: [] })),
};

export const Active = Template.bind({});
Active.args = {
  tab: (() => {
    const tab = new Tab(new UserAccount({ name: 'aaaaaa', OuterAccounts: [] }));
    tab.activate();
    return tab;
  })(),
};
