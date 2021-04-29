import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
export function mPluck<T extends { get(prop: string): R }, R>(prop: string) {
  return map<T, R>((v) => v.get(prop) as R);
}
