import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';
import { CreateComponent } from './create/create.component';
import { SettingComponent } from './setting/setting.component';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [UserAccountManagerComponent, SettingComponent, CreateComponent],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule,
    BaseModule,
    MatButtonModule,
    MatIconModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class UserAccountManagerModule {}
