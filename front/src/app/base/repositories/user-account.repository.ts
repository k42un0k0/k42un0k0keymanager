import { Injectable } from '@angular/core';
import { AbstractRepository } from './abstract.repository';
import { UserAccount } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class UserAccountRepository extends AbstractRepository<UserAccount> {
  constructor() {
    super(UserAccount);
  }
}
