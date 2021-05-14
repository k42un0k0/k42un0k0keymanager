// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CreateComponent } from './create.component';
import { BaseModule } from 'src/app/base/base.module';

export default {
  title: 'user-account-manager/CreateComponent',
  component: CreateComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, MatButtonModule, FormsModule, BaseModule],
    }),
  ],
} as Meta;

const Template: Story<CreateComponent> = (args: CreateComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {};
