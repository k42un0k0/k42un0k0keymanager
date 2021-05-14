import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { OuterAccountListComponent } from './outer-account-list/outer-account-list.component';
import { AuthGuard } from 'src/app/base/guards/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'outer-account-list', component: OuterAccountListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
