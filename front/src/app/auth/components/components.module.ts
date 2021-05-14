import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './input/input.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

@NgModule({
  declarations: [ButtonComponent, ContainerComponent, InputComponent, TitlebarComponent],
  imports: [FormsModule],
  exports: [ButtonComponent, ContainerComponent, InputComponent, TitlebarComponent],
})
export class ComponentsModule {}
