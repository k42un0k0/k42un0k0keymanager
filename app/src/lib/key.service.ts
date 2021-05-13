import { dialog } from 'electron';
import fs from 'fs';
import keytar from 'keytar';
import type { CipherService } from './cipher.service';
import type { WindowManager } from './window-manager';

export class KeyService {
  private readonly _service = 'k42un0k0passwordmanager';

  constructor(private readonly windowManager: WindowManager, private readonly cipherService: CipherService) {}

  async findOrCreate(userAccountID: string): Promise<string> {
    const optKey = await this.find(userAccountID);
    if (optKey != null) return optKey;
    return this.create(userAccountID);
  }

  async find(userAccountID: string): Promise<string | null> {
    return keytar.getPassword(this._service, userAccountID);
  }

  async create(userAccountID: string): Promise<string> {
    const key = this.cipherService.generateKey();
    await keytar.setPassword(this._service, userAccountID, key);
    return key;
  }

  async set(userAccountID: string, key: string): Promise<void> {
    await keytar.setPassword(this._service, userAccountID, key);
  }

  async export(userAccountID: string): Promise<void> {
    const key = await this.find(userAccountID);
    const res = await dialog.showSaveDialog({ title: 'ファイルの保存', defaultPath: 'key.txt' });
    if (key == null || res.filePath == null || res.canceled) return;
    fs.writeFileSync(res.filePath, key, { encoding: 'utf8' });
  }

  async import(userAccountID: string): Promise<void> {
    const res = await dialog.showOpenDialog({ properties: ['openFile'] });
    if (res.filePaths.length !== 1 || res.canceled) return;
    const key = fs.readFileSync(res.filePaths[0], { encoding: 'utf8' });
    await this.set(userAccountID, key);
  }
}
