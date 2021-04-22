import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountManagerRoutingModule } from './user-account-manager-routing.module';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from '../base/directives/auto-focus.directive';


@NgModule({
  declarations: [
    UserAccountManagerComponent
  ],
  providers: [
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    UserAccountManagerRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class UserAccountManagerModule { }
