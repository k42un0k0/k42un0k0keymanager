import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';

export default {
  title: 'main/components/SidebarComponent',
  component: SidebarComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
  decorators: [
    componentWrapperDecorator((story) => `<div style="height: 300px">${story}</div>`),
    moduleMetadata({
      imports: [MatIconModule, MatButtonModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  sidebarItems: of([{ title: 'Job', onClick(): void {} }]),
  open: true,
};
