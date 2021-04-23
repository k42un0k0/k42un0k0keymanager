import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';



@NgModule({
  declarations: [
    TitlebarComponent,
    AutoFocusDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [TitlebarComponent, AutoFocusDirective]
})
export class BaseModule { }
