import { AuthenticationService } from '../../base/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
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
