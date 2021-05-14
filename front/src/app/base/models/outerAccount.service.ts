import { Injectable } from '@angular/core';
import { OuterAccount } from 'src/models';
import { CipherService } from '../electron/cipher.service';
import { KeyService } from '../electron/key.service';

@Injectable({
  providedIn: 'root',
})
export class OuterAccountService {
  constructor(private keyService: KeyService, private cipherService: CipherService) {}
  async encrypt(model: OuterAccount) {
    const key = await this.keyService.find(model.userAccount.id);
    if (key == null) throw new Error('aaaa');
    const encryptedPassword = await this.cipherService.cipher(key, model.password);
    return OuterAccount.copyOf(model, (d) => {
      d.password = encryptedPassword;
    });
  }

  async decrypt(model: OuterAccount) {
    const key = await this.keyService.find(model.userAccount.id);
    if (key == null) throw new Error('aaaa');
    const decryptedPassword = await this.cipherService.decipher(key, model.password);
    return OuterAccount.copyOf(model, (d) => {
      d.password = decryptedPassword;
    });
  }
}
