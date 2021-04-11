import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';


@NgModule({
  declarations: [
    UserAccountManagerComponent
  ],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule
  ]
})
export class UserAccountManagerModule { }
