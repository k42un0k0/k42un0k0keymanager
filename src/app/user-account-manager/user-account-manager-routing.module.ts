import { CreateComponent } from './create/create.component';
import { SettingComponent } from './setting/setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountManagerComponent } from './user-account-manager.component';

const routes: Routes = [
  {
    path: '', component: UserAccountManagerComponent, children: [
      { path: 'setting', component: SettingComponent },
      { path: 'create', component: CreateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountManagerRoutingModule { }
