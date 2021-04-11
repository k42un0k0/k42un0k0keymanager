import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountManagerComponent } from './user-account-manager.component';

const routes: Routes = [{ path: '', component: UserAccountManagerComponent }, { path: 'user-account-setting', loadChildren: () => import('./user-account-setting/user-account-setting.module').then(m => m.UserAccountSettingModule) }, { path: 'user-account-list', loadChildren: () => import('./user-account-list/user-account-list.module').then(m => m.UserAccountListModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountManagerRoutingModule { }
