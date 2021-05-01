// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { action } from '@storybook/addon-actions';
import { BaseModule } from 'src/app/base/base.module';
import { AccountEditorComponent } from './account-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'main/components/AccountEditorComponent',
  component: AccountEditorComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [TabComponent],
      imports: [CommonModule, MatIconModule, MatButtonModule, BaseModule, HttpClientModule],
    }),
  ],
} as Meta;

const Template: Story<AccountEditorComponent> = (args: AccountEditorComponent) => ({
  props: {
    ...args,
    onClickHome: action('home'),
  },
});

export const Primary = Template.bind({});
Primary.args = {};
