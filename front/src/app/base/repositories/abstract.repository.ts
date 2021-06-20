import {
  MutableModel,
  PersistentModel,
  PersistentModelConstructor,
  ProducerModelPredicate,
} from '@aws-amplify/datastore';
import { DataStore } from 'aws-amplify';
import { BehaviorSubject, from } from 'rxjs';

export abstract class AbstractRepository<T extends PersistentModel> {
  observable = DataStore.observe(this.model);
  list = new BehaviorSubject<T[]>([]);
  constructor(protected model: PersistentModelConstructor<T>) {
    this._updateObserber();
    this.observable.subscribe((v) => {
      this._updateObserber();
    });
  }

  private _updateObserber(): void {
    from(this.getAll()).subscribe((list) => {
      this.list.next(list);
    });
  }

  getAll(): Promise<T[]> {
    return DataStore.query(this.model);
  }

  where(criteria: ProducerModelPredicate<T>): Promise<T[]> {
    return DataStore.query(this.model, criteria);
  }

  get(id: string): Promise<T | undefined> {
    return DataStore.query(this.model, id);
  }

  save(model: T): Promise<T> {
    return DataStore.save(model);
  }

  update(model: T, mutator: (draft: MutableModel<T>) => void): Promise<T> {
    return DataStore.save(this.model.copyOf(model, mutator));
  }

  destroy(model: T): Promise<T> {
    return DataStore.delete(model);
  }
}
