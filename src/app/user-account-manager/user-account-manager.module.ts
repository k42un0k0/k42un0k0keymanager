import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserAccountManagerComponent
  ],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserAccountManagerModule { }
