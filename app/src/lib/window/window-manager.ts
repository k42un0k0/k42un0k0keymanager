import { InitialWindow } from './initial-window';
import type { Emitter, EmitterConstructor } from 'src/lib/emitter/emitter';
import type { MyWindow } from 'src/lib/window/my-window';

export class WindowManager {
  windowMap = new Map<number, MyWindow>();

  async createWindow(constructor: new () => MyWindow): Promise<void> {
    const instance = new constructor();
    this.windowMap.set(instance.id, instance);
    await instance.load();
  }

  initializeWindow(): void {
    const instance = new InitialWindow();
    this.windowMap.set(instance.id, instance);
    void instance.load();
    instance.win.once('ready-to-show', () => {
      instance.win.show();
    });
  }

  closeWindow(id: number): void {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error('存在しないウィンドウです');
    win.close();
  }

  getEmitterFromWindow<T extends EmitterConstructor>(id: number, constructor: T): InstanceType<T> | undefined {
    const emitters = this.windowMap.get(id)?.emitters ?? [];
    return emitters.find((v): v is InstanceType<T> => v instanceof constructor);
  }

  getEmitters<T extends EmitterConstructor>(constructor: T): InstanceType<T>[] {
    const windows = this.windowMap.values();
    return Array.from(windows)
      .reduce<Emitter[]>((acc, v) => {
        return acc.concat(v.emitters);
      }, [])
      .filter((v): v is InstanceType<T> => v instanceof constructor);
  }
}
