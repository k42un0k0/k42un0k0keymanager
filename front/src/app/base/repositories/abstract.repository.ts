import { MutableModel, PersistentModel, PersistentModelConstructor } from '@aws-amplify/datastore';
import { DataStore } from 'aws-amplify';

export abstract class AbstractRepository<T extends PersistentModel> {
  observable = DataStore.observe(this.model);
  constructor(private model: PersistentModelConstructor<T>) {}

  getAll(): Promise<T[]> {
    return DataStore.query(this.model);
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
