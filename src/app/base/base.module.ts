import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './directives/auto-focus.directive';



@NgModule({
  declarations: [
    AutoFocusDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [AutoFocusDirective]
})
export class BaseModule { }
