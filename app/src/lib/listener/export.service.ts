import fs from 'fs';
import { dialog } from 'electron';
import { IExportService } from 'lib';
import type { CipherService } from './cipher.service';

export class ExportService extends IExportService {
  constructor(private readonly cipherService: CipherService) {
    super();
  }

  async export(data: string): Promise<void> {
    const passwords = data;
    const res = await dialog.showSaveDialog({
      title: 'ファイルの保存',
      defaultPath: 'allpassword.csv',
    });
    if (res.filePath == null || res.canceled) return;
    fs.writeFileSync(res.filePath, passwords, { encoding: 'utf8' });
  }
}
