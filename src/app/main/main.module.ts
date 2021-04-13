import { AccountViewerComponent } from './common/account-viewer/account-viewer.component';
import { AccountEditorComponent } from './common/account-editor/account-editor.component';
import { AccountCardComponent } from './common/account-card/account-card.component';
import { OuterAccountListComponent } from './outer-account-list/outer-account-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { TabComponent } from './common/tab/tab.component';
import { TabbarComponent } from './common/tabbar/tabbar.component';
import { AccountModalComponent } from './common/account-modal/account-modal.component';

@NgModule({
  declarations: [
    MainComponent,
    AccountCardComponent,
    AccountEditorComponent,
    AccountViewerComponent,
    AccountModalComponent,
    SidebarComponent,
    TabComponent,
    TabbarComponent,
    OuterAccountListComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
