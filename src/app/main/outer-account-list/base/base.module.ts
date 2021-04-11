import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountViewerComponent } from './account-viewer/account-viewer.component';



@NgModule({
  declarations: [
    AccountCardComponent,
    AccountModalComponent,
    AccountEditorComponent,
    AccountViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
