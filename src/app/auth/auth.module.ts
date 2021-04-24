import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    BaseModule,
    ComponentsModule
  ]
})
export class AuthModule { }
