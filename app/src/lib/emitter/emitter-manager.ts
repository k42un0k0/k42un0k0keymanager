import type { Emitter } from './emitter';

export class EmitterManager {
  /**
   * windowのidをキーとして持つ
   */
  emitterMap = new Map<number, Emitter[]>();

  /**
   * @param  {number} id windowのid
   * @param  {Emitter[]} emitters
   * @returns void
   */
  addEmitters(id: number, emitters: Emitter[]): void {
    this.emitterMap.set(id, emitters);
  }

  getEmitterFromWindow<T extends new (...args: any[]) => any>(id: number, constructor: T): InstanceType<T> | undefined {
    const emitters = this.emitterMap.get(id) ?? [];
    // eslintの解釈ではなぜかanyになりエラーになるのでdisable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return emitters.find((v): v is InstanceType<T> => v instanceof constructor);
  }

  getEmitters<T extends new (...args: any[]) => any>(constructor: T): InstanceType<T>[] {
    const emitters = this.emitterMap.values();
    return Array.from(emitters)
      .reduce((acc, v) => {
        return acc.concat(v);
      }, [])
      .filter((v): v is InstanceType<T> => v instanceof constructor);
  }
}
