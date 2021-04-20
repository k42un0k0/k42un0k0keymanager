import { AccountViewerComponent } from './account-viewer/account-viewer.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './tab/tab.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { AccountModalComponent } from './account-modal/account-modal.component';

@NgModule({
  declarations: [
    AccountCardComponent,
    AccountEditorComponent,
    AccountViewerComponent,
    AccountModalComponent,
    SidebarComponent,
    TabComponent,
    TabbarComponent,
  ],
  exports: [
    AccountCardComponent,
    AccountEditorComponent,
    AccountViewerComponent,
    AccountModalComponent,
    SidebarComponent,
    TabComponent,
    TabbarComponent,
  ]
})
export class ComponentsModule { }
