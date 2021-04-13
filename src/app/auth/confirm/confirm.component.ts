import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../common/authentication.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute) { }

  code: string = "";
  get username() {
    return this.route.snapshot.queryParamMap.get("username");
  };
  ngOnInit(): void {
  }

  submit() {
    if (this.username != null) {
      this.authenticationService.confirmSignUp({ username: this.username, code: this.code })
    }
  }
}
