import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { urlUtils } from 'lib';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, map, mergeMap } from 'rxjs/operators';
import { IconService } from 'src/app/base/electron/icon.service';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { OuterAccount, UserAccount } from 'src/models';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss'],
})
export class AccountEditorComponent {
  providerName = '';
  userId = '';
  password = '';
  link = '';
  iconSubject = new BehaviorSubject('');
  iconPath = '';

  editing = false;
  creating = false;

  get disabled(): boolean {
    return !this.creating && !this.editing;
  }

  constructor(
    private dialogRef: MatDialogRef<AccountEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { outerAccountID?: string; userAccount: UserAccount },
    private outerAccountRepository: OuterAccountRepository,
    private iconService: IconService
  ) {
    this.iconSubject
      .pipe(
        debounceTime(1000),
        mergeMap((v) => {
          return from(this.iconService.getFromUrl(v));
        }),
        map(urlUtils.complementProtocol)
      )
      .subscribe((v) => {
        this.iconPath = v;
      });

    if (this.data.outerAccountID) {
      this.outerAccountRepository.get(this.data.outerAccountID).then((outerAccount) => {
        if (outerAccount) {
          this._parseOuterAccountToProperty(outerAccount);
        }
      });
    } else {
      this.creating = true;
    }
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }
  private _parseOuterAccountToProperty(outerAccount: OuterAccount): void {
    this.providerName = outerAccount.providerName;
    this.userId = outerAccount.userId;
    this.password = outerAccount.password;
    this.link = outerAccount.link;
    this.iconSubject.next(outerAccount.link);
    this.iconPath = outerAccount.iconPath;
  }

  onChangeLink(v: string): void {
    this.link = v;
    this.iconSubject.next(v);
  }

  async save(e: MouseEvent): Promise<void> {
    e.preventDefault();
    if (this.creating) {
      this._create();
    } else {
      this._update();
    }
  }
  private async _update(): Promise<void> {
    if (this.data.outerAccountID) {
      const outerAccount = await this.outerAccountRepository.get(this.data.outerAccountID);
      if (outerAccount) {
        await this.outerAccountRepository.update(outerAccount, (v) => {
          v.userAccount = this.data.userAccount;
          v.providerName = this.providerName;
          v.userId = this.userId;
          v.password = this.password;
          v.link = this.link;
          v.iconPath = this.iconPath;
        });

        this.toggleEdit();
      }
    }
  }
  private async _create(): Promise<void> {
    await this.outerAccountRepository.create(
      new OuterAccount({
        userAccount: this.data.userAccount,
        providerName: this.providerName,
        userId: this.userId,
        password: this.password,
        link: this.link,
        iconPath: this.iconPath,
      })
    );

    this.dialogRef.close();
  }

  async destroyAccount(e: MouseEvent): Promise<void> {
    e.preventDefault();
    if (this.data.outerAccountID) {
      const outerAccount = await this.outerAccountRepository.get(this.data.outerAccountID);
      if (outerAccount) {
        await this.outerAccountRepository.destroy(outerAccount);
        this.dialogRef.close();
      }
    }
  }
}
