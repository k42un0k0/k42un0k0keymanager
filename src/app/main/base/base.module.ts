import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbarComponent } from './tabbar/tabbar.component';
import { TabComponent } from './tab/tab.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    TabbarComponent,
    TabComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabbarComponent,
    TabComponent,
    SidebarComponent,
  ]
})
export class BaseModule { }
