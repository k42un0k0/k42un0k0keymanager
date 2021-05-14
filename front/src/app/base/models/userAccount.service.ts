import { Injectable } from '@angular/core';
import { UserAccount } from 'src/models';
import { KeyService } from '../electron/key.service';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  constructor(private keyService: KeyService) {}

  filterWithKey(userAccount: UserAccount): Promise<boolean> {
    return this.keyService.find(userAccount.id).then((v) => !!v);
  }
}
