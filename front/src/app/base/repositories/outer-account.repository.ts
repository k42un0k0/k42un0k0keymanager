import { Injectable } from '@angular/core';
import { MutableModel } from '@aws-amplify/datastore';
import { OuterAccount } from 'src/models';
import { AbstractRepository } from './abstract.repository';

@Injectable({
  providedIn: 'root',
})
export class OuterAccountRepository extends AbstractRepository<OuterAccount> {
  constructor() {
    super(OuterAccount);
  }

  async save(model: OuterAccount): Promise<OuterAccount> {
    return super.save(await this._encrypt(model));
  }

  async update(model: OuterAccount, mutator: (draft: MutableModel<OuterAccount>) => void): Promise<OuterAccount> {
    return this.save(OuterAccount.copyOf(model, mutator));
  }

  async get(id: string): Promise<OuterAccount | undefined> {
    return super
      .get(id)
      .then((v) => {
        console.log(v);
        return v;
      })
      .then((model) => (model ? this._decrypt(model) : model));
  }

  private async _encrypt(model: OuterAccount) {
    const key = await window.main.keyService.findOrCreate(model.userAccount.id);
    const encryptedPassword = await window.main.cipherService.cipher(key, model.password);
    return OuterAccount.copyOf(model, (d) => {
      d.password = encryptedPassword;
    });
  }

  private async _decrypt(model: OuterAccount) {
    const key = await window.main.keyService.findOrCreate(model.userAccount.id);
    const decryptedPassword = await window.main.cipherService.decipher(key, model.password);
    return OuterAccount.copyOf(model, (d) => {
      d.password = decryptedPassword;
    });
  }
}
