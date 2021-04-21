// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { TabbarComponent } from './tabbar.component';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { action } from '@storybook/addon-actions';
import { BaseModule } from 'src/app/base/base.module';

export default {
  title: 'main/components/TabbarComponent',
  component: TabbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [TabComponent],
      imports: [CommonModule, MatIconModule, BaseModule],
    }),
  ],
} as Meta;

const Template: Story<TabbarComponent> = (args: TabbarComponent) => ({
  props: {
    ...args,
    onClickHome: action("home")
  },
});

export const Primary = Template.bind({});
Primary.args = {
  tabItems: [{ title: "hello", link: "/outer-account-list" }, { title: "world", link: "/outer-account-list" }],
};
