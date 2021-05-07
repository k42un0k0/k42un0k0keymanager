import { ElectronService } from 'src/app/base/services/electron.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, mergeMap, map } from 'rxjs/operators';
import { UrlUtils } from 'lib';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OuterAccount, UserAccount } from 'src/models';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss'],
})
export class AccountEditorComponent implements OnInit {
  providerName = '';
  userId = '';
  password = '';
  link = '';
  iconSubject = new BehaviorSubject('');
  iconPath = '';

  constructor(
    private dialogRef: MatDialogRef<AccountEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userAccount: UserAccount },
    private electronService: ElectronService,
    private outerAccountRepository: OuterAccountRepository
  ) {
    this.iconSubject
      .pipe(
        debounceTime(1000),
        mergeMap((v) => {
          return from(this.electronService.getFromUrl(v));
        }),
        map(UrlUtils.complementProtocol)
      )
      .subscribe((v) => {
        this.iconPath = v;
      });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onChangeLink(v: string): void {
    console.log(v);
    this.link = v;
    this.iconSubject.next(v);
  }

  async save(e: MouseEvent): Promise<void> {
    e.preventDefault();
    await this.outerAccountRepository.save(
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
}
