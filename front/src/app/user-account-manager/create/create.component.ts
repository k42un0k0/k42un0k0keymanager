import { Component } from '@angular/core';
import { UserAccount } from 'src/models';
import { UserAccountRepository } from '../../base/repositories/user-account.repository';

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
    this.userAccountRepository.save(new UserAccount({ name: this.name, token: 'aaaaaa', OuterAccounts: [] }));
  }
}
