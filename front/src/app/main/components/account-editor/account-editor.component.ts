import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { urlUtils } from 'lib';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, map, mergeMap } from 'rxjs/operators';
import { IconService } from 'src/app/base/electron/icon.service';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { genPassword } from 'src/app/utils/password';
import { OuterAccount, UserAccount } from 'src/models';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss'],
})
export class AccountEditorComponent {
  iconSubject = new BehaviorSubject('');

  form = new FormGroup({
    passwordLength: new FormControl(8),
    isGeneratePassword: new FormControl(false),
    outerAccount: new FormGroup({
      providerName: new FormControl(''),
      userId: new FormControl(''),
      password: new FormControl(''),
      link: new FormControl(''),
      iconPath: new FormControl(''),
    }),
    check: new FormGroup({
      lowercase: new FormControl(true),
      uppercase: new FormControl(true),
      numeric: new FormControl(true),
      symbol: new FormControl(true),
    }),
  });
  get passwordLength() {
    return this.form.get('passwordLength');
  }
  get isGeneratePassword() {
    return this.form.get('isGeneratePassword');
  }
  get outerAccount() {
    return this.form.get('outerAccount');
  }
  get check() {
    return this.form.get('check');
  }

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
          return from(
            this.iconService.getFromUrl(v).catch(() => {
              return '';
            })
          );
        }),
        map(urlUtils.complementProtocol)
      )
      .subscribe((v) => {
        this.outerAccount?.setValue({
          ...this.outerAccount?.value,
          iconPath: v,
        });
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
    if (this.data.outerAccountID) {
      this.outerAccountRepository.get(this.data.outerAccountID).then((outerAccount) => {
        if (outerAccount) {
          this._parseOuterAccountToProperty(outerAccount);
        }
      });
    }
  }

  genPassworda() {
    this.outerAccount?.setValue({
      ...this.outerAccount?.value,
      password: genPassword(this.passwordLength?.value, this.check?.value),
    });
  }
  private _parseOuterAccountToProperty(outerAccount: OuterAccount): void {
    this.outerAccount?.setValue({
      providerName: outerAccount.providerName,
      userId: outerAccount.userId,
      password: outerAccount.password,
      link: outerAccount.link,
      iconPath: outerAccount.iconPath,
    });
    this.iconSubject.next(outerAccount.link);
  }

  onChangeLink(v: string): void {
    if (v !== this.iconSubject.value) this.iconSubject.next(v);
  }

  async save(): Promise<void> {
    console.log(this.form);
    // if (this.creating) {
    //   this._create();
    // } else {
    //   this._update();
    // }
  }
  private async _update(): Promise<void> {
    if (this.data.outerAccountID) {
      const outerAccount = await this.outerAccountRepository.get(this.data.outerAccountID);
      if (outerAccount) {
        await this.outerAccountRepository.update(outerAccount, (v) => {
          v.userAccount = this.data.userAccount;
          v = { ...v, ...this.outerAccount?.value };
        });

        this.toggleEdit();
      }
    }
  }
  private async _create(): Promise<void> {
    await this.outerAccountRepository.create(
      new OuterAccount({
        ...this.outerAccount?.value,
        userAccount: this.data.userAccount,
      })
    );

    this.dialogRef.close();
  }

  async destroyAccount(): Promise<void> {
    if (this.data.outerAccountID) {
      const outerAccount = await this.outerAccountRepository.get(this.data.outerAccountID);
      if (outerAccount) {
        await this.outerAccountRepository.destroy(outerAccount);
        this.dialogRef.close();
      }
    }
  }
}
