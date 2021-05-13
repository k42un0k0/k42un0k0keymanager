import * as crypto from 'crypto';

export class CipherService {
  private readonly _keyLength = 32;

  private readonly _ivLenght = 16;

  createKey(): Buffer {
    return crypto.randomBytes(this._keyLength);
  }

  cipher(key: Buffer, plaintext: string): string {
    const iv = this._iv();
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return `${iv.toString('base64')}:${encrypted}`;
  }

  decipher(key: Buffer, encryptedData: string): string {
    const [iv, encryptedText] = encryptedData.split(':');

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'base64'));
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  private _iv(): Buffer {
    return crypto.randomBytes(this._ivLenght);
  }
}
