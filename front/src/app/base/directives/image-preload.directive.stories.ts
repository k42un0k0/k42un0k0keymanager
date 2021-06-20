import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BaseModule } from 'src/app/base/base.module';
import { OuterAccount, UserAccount } from 'src/models';

export default {
  title: 'base/directives/ImagePreloadDirective',
  decorators: [
    moduleMetadata({
      imports: [BaseModule],
    }),
  ],
} as Meta;

export const List = () => ({
  template: `<div style="display: flex;flex-wrap: wrap;">
    <img src="https://unko.com" appDefault="./assets/icons/lock.png"/>
  </div>`,
});
