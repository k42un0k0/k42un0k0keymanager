import { TitlebarComponent } from './titlebar/titlebar.component';
import { InputComponent } from './input/input.component';
import { ContainerComponent } from './container/container.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, ContainerComponent, InputComponent, TitlebarComponent],
  imports: [FormsModule],
  exports: [ButtonComponent, ContainerComponent, InputComponent, TitlebarComponent],
})
export class ComponentsModule {}
