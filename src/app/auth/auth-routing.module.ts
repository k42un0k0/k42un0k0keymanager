import { UnauthedGuard } from '../base/guards/unauthed.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: 'login', canActivate: [UnauthedGuard], component: LoginComponent, data: { animation: "login" } },
  { path: 'register', component: RegisterComponent, data: { animation: "register" } },
  { path: 'confirm', component: ConfirmComponent, data: { animation: "confirm" } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
