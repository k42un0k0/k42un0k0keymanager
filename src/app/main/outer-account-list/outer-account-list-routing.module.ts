import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterAccountListComponent } from './outer-account-list.component';

const routes: Routes = [{ path: '', component: OuterAccountListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterAccountListRoutingModule { }
