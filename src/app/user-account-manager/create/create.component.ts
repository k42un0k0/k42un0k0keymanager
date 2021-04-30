import { ElectronService } from './../../base/services/electron.service';
import { APIService } from './../../API.service';
import { Component, OnInit } from '@angular/core';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private userAccountRepository: UserAccountRepository, private electronService: ElectronService) { }

  ngOnInit(): void {
  }
  name: string = "";
  password: string = "";

  submit() {
    this.userAccountRepository.create({ name: this.name, token: "aaaaaa" })
  }
}
