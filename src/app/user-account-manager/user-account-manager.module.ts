import { CreateComponent } from './create/create.component';
import { SettingComponent } from './setting/setting.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from '../base/directives/auto-focus.directive';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    UserAccountManagerComponent,
    SettingComponent,
    CreateComponent,
  ],
  providers: [
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ComponentsModule
  ]
})
export class UserAccountManagerModule { }
