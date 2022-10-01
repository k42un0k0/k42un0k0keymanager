import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSlideToggleModule, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './tabbar/tab.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { BaseModule } from 'src/app/base/base.module';
@NgModule({
  declarations: [AccountCardComponent, AccountEditorComponent, SidebarComponent, TabComponent, TabbarComponent],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BaseModule,
    DragDropModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
  exports: [AccountCardComponent, AccountEditorComponent, SidebarComponent, TabComponent, TabbarComponent],
})
export class ComponentsModule {}
