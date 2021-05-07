import { ElectronService } from '../../base/services/electron.service';
import { Component, OnInit } from '@angular/core';
import { UserAccountRepository } from '../../base/repositories/user-account.repository';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  name = '';
  password = '';

  constructor(private userAccountRepository: UserAccountRepository, private electronService: ElectronService) {}
  ngOnInit(): void {}

  submit(): void {
    this.userAccountRepository.save(new UserAccount({ name: this.name, token: 'aaaaaa' }));
  }
}
