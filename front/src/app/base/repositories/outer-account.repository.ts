import { Injectable } from '@angular/core';
import { AbstractRepository } from './abstract.repository';
import { OuterAccount } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class OuterAccountRepository extends AbstractRepository<OuterAccount> {
  constructor() {
    super(OuterAccount);
  }
}
