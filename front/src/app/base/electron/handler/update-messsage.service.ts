import { IUpdateMessageService } from 'lib';

export class UpdateMessageService extends IUpdateMessageService {
  onProgress(parcent: number): void {
    throw new Error('Method not implemented.');
  }
}
