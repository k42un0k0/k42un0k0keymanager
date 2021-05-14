import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { OuterAccountListComponent } from './outer-account-list/outer-account-list.component';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [MainComponent, OuterAccountListComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ComponentsModule,
    BaseModule,
  ],
})
export class MainModule {}
