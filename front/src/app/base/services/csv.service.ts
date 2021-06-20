import { Injectable } from '@angular/core';
import { parse } from 'csv';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { OuterAccount, UserAccount } from 'src/models';
@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor(private aa: OuterAccountRepository) {}
  async export(userAccount: UserAccount): Promise<void> {
    const values = await this.aa.getAllByUserAcountID(userAccount.id);
    const head = ['providerName', 'userId', 'password', 'link'];
    let result = [
      head.join(','),
      ...values.map((model) => {
        return head.map((key) => model[key]).join(',');
      }),
    ].join('\n');

    const a = document.createElement('a');
    a.download = 'export.csv';
    a.href = 'data:application/octet-stream,' + encodeURIComponent(result);
    console.log(result);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  async import(userAccount: UserAccount, value: string): Promise<OuterAccount[]> {
    const result: any[][] = await new Promise((res, rej) =>
      parse(value, (e, r) => {
        if (e) rej(e);
        else res(r);
      })
    );
    const [head, ...rows] = result;
    const providerNameIndex = head.findIndex((v) => v === 'providerName');
    const userIdIndex = head.findIndex((v) => v === 'userId');
    const passwordIndex = head.findIndex((v) => v === 'password');
    const linkIndex = head.findIndex((v) => v === 'link');
    console.log(head);
    return await Promise.all(
      rows.map((row) => {
        console.log(row, row[userIdIndex], userIdIndex);
        const outerAccount = new OuterAccount({
          userAccount: userAccount,
          providerName: row[providerNameIndex],
          userId: row[userIdIndex],
          password: row[passwordIndex],
          link: row[linkIndex],
          iconPath: '',
        });
        console.log(outerAccount);
        return this.aa.create(outerAccount);
      })
    );
  }
}
