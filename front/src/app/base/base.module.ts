import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './components/input/input.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ImagePreloadDirective } from './directives/image-preload.directive';

@NgModule({
  declarations: [AutoFocusDirective, InputComponent, ImagePreloadDirective],
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  exports: [AutoFocusDirective, InputComponent, ImagePreloadDirective],
})
export class BaseModule {}
