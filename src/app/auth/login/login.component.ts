import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  password = "";
  username = "";

  submit() {
    this.authenticationService.signIn({ username: this.username, password: this.password }).then((res) => { console.log(res) })
  }
}
