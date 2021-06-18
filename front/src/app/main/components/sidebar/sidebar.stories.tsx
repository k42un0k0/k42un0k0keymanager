import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { of } from 'rxjs';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { TestModule } from 'src/app/test/test.module';

export default {
  title: 'main/components/SidebarComponent',
  component: SidebarComponent,
  argTypes: {
    open: { control: 'boolean' },
  },
  decorators: [
    componentWrapperDecorator((story) => `<div style="height: 300px">${story}</div>`),
    moduleMetadata({
      imports: [ComponentsModule, TestModule],
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
