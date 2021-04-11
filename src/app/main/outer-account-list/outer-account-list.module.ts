import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuterAccountListRoutingModule } from './outer-account-list-routing.module';
import { OuterAccountListComponent } from './outer-account-list.component';


@NgModule({
  declarations: [
    OuterAccountListComponent
  ],
  imports: [
    CommonModule,
    OuterAccountListRoutingModule
  ]
})
export class OuterAccountListModule { }
