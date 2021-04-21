import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-user-account-manager',
  templateUrl: './user-account-manager.component.html',
  styleUrls: ['./user-account-manager.component.scss']
})
export class UserAccountManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userAccounts: UserAccount[] = [{
    id: "",
    token: "",
    name: "Jobs",
  }, {
    id: "",
    token: "",
    name: "Hobby",
  }];

  closeWindow() {
    window.close();
  }
}
