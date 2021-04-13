import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BaseModule } from '../base/base.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    BaseModule,
  ]
})
export class AuthModule { }
