import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'main/components/SidebarComponent',
  component: SidebarComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
  decorators: [
    componentWrapperDecorator((story) => `<div style="height: 300px">${story}</div>`),
    moduleMetadata({
      imports: [MatIconModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  sidebarItems: [{ title: "Job", link: "/auth/login" }],
  open: true
};