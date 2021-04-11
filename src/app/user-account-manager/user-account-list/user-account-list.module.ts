import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountListRoutingModule } from './user-account-list-routing.module';
import { UserAccountListComponent } from './user-account-list.component';


@NgModule({
  declarations: [
    UserAccountListComponent
  ],
  imports: [
    CommonModule,
    UserAccountListRoutingModule
  ]
})
export class UserAccountListModule { }
