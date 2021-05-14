// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';

export default {
  title: 'main/MainComponent',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule, RouterTestingModule, MatIconModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  props: {
    ...args,
  },
});

export const Primary = Template.bind({});
Primary.args = {};
