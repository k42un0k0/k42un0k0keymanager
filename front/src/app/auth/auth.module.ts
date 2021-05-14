import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from './components/components.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ConfirmComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, BaseModule, ComponentsModule],
})
export class AuthModule {}
