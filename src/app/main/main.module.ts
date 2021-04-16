import { AccountViewerComponent } from './components/account-viewer/account-viewer.component';
import { AccountEditorComponent } from './components/account-editor/account-editor.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { OuterAccountListComponent } from './outer-account-list/outer-account-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabComponent } from './components/tab/tab.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { AccountModalComponent } from './components/account-modal/account-modal.component';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ]
})
export class MainModule { }
