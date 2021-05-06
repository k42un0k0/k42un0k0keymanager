import { ElectronService } from '../../base/services/electron.service';
import { Component, OnInit } from '@angular/core';
import { UserAccountRepository } from '../../base/repositories/user-account.repository';

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
    this.userAccountRepository.create({ name: this.name, token: 'aaaaaa' });
  }
}
