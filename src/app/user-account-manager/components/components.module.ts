import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseModule } from 'src/app/base/base.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [FormsModule, BaseModule],
  exports: [
    InputComponent,
  ]
})
export class ComponentsModule { }
