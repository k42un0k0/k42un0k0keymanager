import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  name = new FormControl('');

  constructor(private userAccountRepository: UserAccountRepository, private router: Router) {}

  async submit() {
    const model = new UserAccount({ name: this.name.value, OuterAccounts: [] });
    await this.userAccountRepository.create(model);
    this.router.navigate(['/user-account-manager/setting/' + model.id]);
  }
}
