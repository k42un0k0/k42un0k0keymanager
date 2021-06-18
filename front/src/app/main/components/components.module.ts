import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './tab/tab.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [AccountCardComponent, AccountEditorComponent, SidebarComponent, TabComponent, TabbarComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    BaseModule,
    MatDialogModule,
    DragDropModule,
    MatMenuModule,
  ],
  exports: [AccountCardComponent, AccountEditorComponent, SidebarComponent, TabComponent, TabbarComponent],
})
export class ComponentsModule {}
