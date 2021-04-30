import { AuthenticationService } from '../../base/services/authentication.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from 'src/app/base/services/window.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit {

  constructor(private authenticationService: AuthenticationService, private elm: ElementRef, private windowService: WindowService, private router: Router) { }
  ngAfterViewInit(): void {
    this.windowService.resizeTo(this.elm);
  }
  username = ""
  password = ""
  email = ""
  passwordConfirmation = ""

  async submit() {
    await this.authenticationService.signUp({ username: this.username, password: this.password, email: this.email }).then((res) => { console.log(res) })
    this.router.navigate(['/auth/confirm'], { queryParams: { username: this.username } });
  }
}
