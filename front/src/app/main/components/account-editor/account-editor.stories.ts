// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AccountEditorComponent } from './account-editor.component';
import { BaseModule } from 'src/app/base/base.module';
import { TabComponent } from 'src/app/main/components/tab/tab.component';

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
  },
});

export const Primary = Template.bind({});
Primary.args = {};
