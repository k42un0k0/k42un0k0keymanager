import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService, WindowEnum } from 'src/app/base/services/electron.service';
import { WindowService } from 'src/app/base/services/window.service';
import { AuthenticationService } from '../../base/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  constructor(
    private authenticationService: AuthenticationService,
    private elm: ElementRef,
    private windowService: WindowService,
    private electronService: ElectronService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.windowService.resizeTo(this.elm);
  }

  password = '';
  username = '';

  async submit() {
    await this.authenticationService.signIn({ username: this.username, password: this.password });
    await this.electronService.openWindow(WindowEnum.main);
    this.electronService.closeWindow();
  }
}
