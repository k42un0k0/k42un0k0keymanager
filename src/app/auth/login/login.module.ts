import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BaseModule } from '../base/base.module';
import { BaseModule as AppBaseModule } from '../../base/base.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BaseModule,
    AppBaseModule
  ]
})
export class LoginModule { }
