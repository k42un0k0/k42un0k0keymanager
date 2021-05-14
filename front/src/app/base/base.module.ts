import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [AutoFocusDirective, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [AutoFocusDirective, InputComponent],
})
export class BaseModule {}
