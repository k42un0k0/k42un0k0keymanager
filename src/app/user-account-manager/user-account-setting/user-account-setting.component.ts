import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-user-account-setting',
  templateUrl: './user-account-setting.component.html',
  styleUrls: ['./user-account-setting.component.scss']
})
export class UserAccountSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userAccount: UserAccount = {
    id: "",
    token: "",
    name: "Jobs",
  }
  editing = false;
  onClickEdit() {
    this.editing = !this.editing;
  }
}
