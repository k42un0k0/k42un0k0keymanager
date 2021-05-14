import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SettingComponent } from './setting/setting.component';
import { UserAccountManagerComponent } from './user-account-manager.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountManagerComponent,
    children: [
      { path: 'setting/:id', component: SettingComponent },
      { path: 'create', component: CreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountManagerRoutingModule {}
