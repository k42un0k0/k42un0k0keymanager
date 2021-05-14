import { TestScheduler } from 'rxjs/testing';
export function createScheduler(): TestScheduler {
  return new TestScheduler((a, e) => {
    expect(a).toEqual(e);
  });
}
