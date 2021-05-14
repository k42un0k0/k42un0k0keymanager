// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabbarComponent } from './tabbar.component';
import { BaseModule } from 'src/app/base/base.module';
import { TabComponent } from 'src/app/main/components/tab/tab.component';

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
    clickHome: action('home'),
  },
});

export const Primary = Template.bind({});
Primary.args = {};
