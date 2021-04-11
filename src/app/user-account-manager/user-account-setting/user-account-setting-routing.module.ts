import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountSettingComponent } from './user-account-setting.component';

const routes: Routes = [{ path: '', component: UserAccountSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountSettingRoutingModule { }
