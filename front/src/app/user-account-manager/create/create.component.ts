import { Component } from '@angular/core';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  name = '';
  password = '';

  constructor(private userAccountRepository: UserAccountRepository) {}

  submit(): void {
    this.userAccountRepository.create(new UserAccount({ name: this.name, token: 'aaaaaa', OuterAccounts: [] }));
  }
}
