import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/base/services/authentication.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  code = '';

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get username(): string | null {
    return this.route.snapshot.queryParamMap.get('username');
  }

  async submit(): Promise<void> {
    if (this.username != null) {
      await this.authenticationService.confirmSignUp({ username: this.username, code: this.code });
      this.router.navigate(['/auth/login'], { queryParams: { username: this.username } });
    }
  }
}
