import * as crypto from 'crypto';
import { ICipherService } from 'lib';

export class CipherService extends ICipherService {
  private readonly _keyLength = 32;

  private readonly _ivLenght = 16;

  private readonly _sepalator = ':';

  private readonly _algolithm = 'aes-256-cbc';

  private readonly _cipherEncode = 'base64';

  private readonly _plaintextEncode = 'utf8';

  generateKey(): string {
    return crypto.randomBytes(this._keyLength).toString(this._cipherEncode);
  }

  cipher(key: string, plaintext: string): string {
    const iv = this._generateIv();
    const cipher = crypto.createCipheriv(this._algolithm, Buffer.from(key, this._cipherEncode), iv);
    let encrypted = cipher.update(plaintext, this._plaintextEncode, this._cipherEncode);
    encrypted += cipher.final(this._cipherEncode);

    return `${iv.toString(this._cipherEncode)}${this._sepalator}${encrypted}`;
  }

  decipher(key: string, encryptedData: string): string {
    const [iv, encryptedText] = encryptedData.split(this._sepalator);

    const decipher = crypto.createDecipheriv(
      this._algolithm,
      Buffer.from(key, this._cipherEncode),
      Buffer.from(iv, this._cipherEncode)
    );
    let decrypted = decipher.update(encryptedText, this._cipherEncode, this._plaintextEncode);
    decrypted += decipher.final(this._plaintextEncode);
    return decrypted;
  }

  private _generateIv(): Buffer {
    return crypto.randomBytes(this._ivLenght);
  }
}
