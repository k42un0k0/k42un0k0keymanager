import { Component, Input } from '@angular/core';
import { OuterAccount } from 'src/models';

@Component({
  selector: 'app-account-card',
  template: `
    <div class="container">
      <div class="content">
        <div class="primary providerName">{{ account.providerName }}</div>
        <div class="secondary userId">{{ account.userId }}</div>
      </div>
      <img alt="provier icon" [src]="account.iconPath" appDefault="./assets/icons/lock.png" />
    </div>
  `,
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent {
  @Input()
  account!: OuterAccount;

  constructor() {}
}
