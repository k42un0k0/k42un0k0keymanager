import { Component, Input, OnInit } from '@angular/core';
import { OuterAccount } from 'src/models';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  account!: OuterAccount;
}
