import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { BaseModule } from '../base/base.module';
import { BaseModule as AppBaseModule } from '../../base/base.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    BaseModule,
    AppBaseModule,
  ]
})
export class RegisterModule { }
