import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountSettingRoutingModule } from './user-account-setting-routing.module';
import { UserAccountSettingComponent } from './user-account-setting.component';


@NgModule({
  declarations: [
    UserAccountSettingComponent
  ],
  imports: [
    CommonModule,
    UserAccountSettingRoutingModule
  ]
})
export class UserAccountSettingModule { }
