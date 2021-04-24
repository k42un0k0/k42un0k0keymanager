import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userAccount: DeepWritable<UserAccount> = {
    id: "",
    token: "",
    name: "Jobs",
  }
  editing = false;
  onClickEdit() {
    this.editing = !this.editing;
  }
}
