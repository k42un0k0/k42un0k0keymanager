import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoFocusDirective, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [AutoFocusDirective, InputComponent],
})
export class BaseModule {}
