import { MatButtonModule } from '@angular/material/button';
import { AccountViewerComponent } from './account-viewer/account-viewer.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './tab/tab.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [AccountCardComponent, AccountEditorComponent, AccountViewerComponent, AccountModalComponent, SidebarComponent, TabComponent, TabbarComponent],
  imports: [MatIconModule, MatButtonModule, RouterModule, CommonModule, BaseModule],
  exports: [AccountCardComponent, AccountEditorComponent, AccountViewerComponent, AccountModalComponent, SidebarComponent, TabComponent, TabbarComponent],
})
export class ComponentsModule {}
