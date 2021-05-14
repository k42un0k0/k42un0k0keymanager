import { Injectable } from '@angular/core';
import { MutableModel } from '@aws-amplify/datastore';
import { OuterAccount } from 'src/models';
import { OuterAccountService } from '../models/outerAccount.service';
import { AbstractRepository } from './abstract.repository';

@Injectable({
  providedIn: 'root',
})
export class OuterAccountRepository extends AbstractRepository<OuterAccount> {
  constructor(private outerAccount: OuterAccountService) {
    super(OuterAccount);
  }

  async save(model: OuterAccount): Promise<OuterAccount> {
    return super.save(await this.outerAccount.encrypt(model));
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
      .then((model) => (model ? this.outerAccount.decrypt(model) : model));
  }
}
