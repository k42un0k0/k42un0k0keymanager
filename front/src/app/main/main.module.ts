import { MatButtonModule } from '@angular/material/button';
import { BaseModule } from '../base/base.module';
import { OuterAccountListComponent } from './outer-account-list/outer-account-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [MainComponent, OuterAccountListComponent],
  imports: [CommonModule, MainRoutingModule, MatIconModule, MatButtonModule, ComponentsModule, BaseModule],
})
export class MainModule {}
