import { AuthGuard } from './base/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: '', canActivate: [AuthGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, { path: 'user-account-manager', canActivate: [AuthGuard], loadChildren: () => import('./user-account-manager/user-account-manager.module').then(m => m.UserAccountManagerModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
