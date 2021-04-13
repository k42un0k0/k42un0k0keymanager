import { UserAccountSettingComponent } from './user-account-setting/user-account-setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountManagerComponent } from './user-account-manager.component';
import { UserAccountListComponent } from './user-account-list/user-account-list.component';

const routes: Routes = [
  { path: '', component: UserAccountManagerComponent },
  { path: 'user-account-setting', component: UserAccountSettingComponent },
  { path: 'user-account-list', component: UserAccountListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountManagerRoutingModule { }
