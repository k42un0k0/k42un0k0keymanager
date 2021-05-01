import { CreateComponent } from './create/create.component';
import { SettingComponent } from './setting/setting.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [UserAccountManagerComponent, SettingComponent, CreateComponent],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule,
    MatIconModule,
    BaseModule,
    MatButtonModule,
    BaseModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class UserAccountManagerModule {}
