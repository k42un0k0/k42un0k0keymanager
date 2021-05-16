// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AccountEditorComponent } from './account-editor.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { TestModule } from 'src/app/test/test.module';

export default {
  title: 'main/components/AccountEditorComponent',
  component: AccountEditorComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [ComponentsModule, TestModule],
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
