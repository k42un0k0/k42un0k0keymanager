import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountListComponent } from './user-account-list.component';

const routes: Routes = [{ path: '', component: UserAccountListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountListRoutingModule { }
