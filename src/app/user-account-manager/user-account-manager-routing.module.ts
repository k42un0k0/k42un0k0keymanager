import { UserAccountSettingComponent } from './user-account-setting/user-account-setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountManagerComponent } from './user-account-manager.component';

const routes: Routes = [
  { path: '', component: UserAccountManagerComponent },
  { path: 'user-account-setting', component: UserAccountSettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountManagerRoutingModule { }
