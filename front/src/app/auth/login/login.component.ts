import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'src/app/base/electron/electron.service';
import { WindowService } from 'src/app/base/services/window.service';
import { AuthenticationService } from '../../base/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  password = '';
  username = '';

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

  async submit(): Promise<void> {
    await this.authenticationService.signIn({ username: this.username, password: this.password });
    await this.electronService.main();
    this.electronService.close();
  }
}
