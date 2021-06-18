import * as csv from 'csv';
import { ICsvService } from 'lib';

export class CsvService extends ICsvService {
  private readonly _service = 'k42un0k0passwordmanager';

  async parse(s: string): Promise<any> {
    return new Promise((res, rej) => {
      csv.parse(s, (e: any, r: unknown) => {
        if (e != null) {
          rej(e);
          return;
        } else {
          res(r);
        }
      });
    });
  }
}
