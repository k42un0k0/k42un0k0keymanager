import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../base/services/authentication.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  code: string = "";
  get username() {
    return this.route.snapshot.queryParamMap.get("username");
  };
  ngOnInit(): void {
  }

  async submit() {
    if (this.username != null) {
      await this.authenticationService.confirmSignUp({ username: this.username, code: this.code })
      this.router.navigate(['/auth/login'], { queryParams: { username: this.username } });
    }
  }
}
