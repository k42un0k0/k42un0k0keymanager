import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: '', component: MainComponent }, { path: 'outer-account-list', loadChildren: () => import('./outer-account-list/outer-account-list.module').then(m => m.OuterAccountListModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
