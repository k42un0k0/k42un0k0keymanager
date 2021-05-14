import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/base/services/authentication.service';
import { WindowService } from 'src/app/base/services/window.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
  username = '';
  password = '';
  email = '';
  passwordConfirmation = '';

  constructor(
    private authenticationService: AuthenticationService,
    private elm: ElementRef,
    private windowService: WindowService,
    private router: Router
  ) {}
  ngAfterViewInit(): void {
    this.windowService.resizeTo(this.elm);
  }

  async submit(): Promise<void> {
    await this.authenticationService
      .signUp({ username: this.username, password: this.password, email: this.email })
      .then((res) => {
        console.log(res);
      });
    this.router.navigate(['/auth/confirm'], { queryParams: { username: this.username } });
  }
}
