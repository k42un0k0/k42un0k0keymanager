function createNonNullableValue<T>(def: T): (value: NullableValue<T>) => T {
  return function nonNullableValue(value: NullableValue<T>): T {
    return value ?? def;
  };
}

type NullableValue<T> = T | null | undefined;

const defaultValue = {
  number: 0,
  string: '',
};
export const nonNullable = {
  array: function nonNullableArray<T>(arr: NullableValue<T[]>): T[] {
    return createNonNullableValue<T[]>([])(arr);
  },
  arrayItem: function nonNullableArray<T>(arr: NullableValue<T>[]): T[] {
    return arr.filter((v): v is T => v != null);
  },
  number: createNonNullableValue(defaultValue.number),
  string: createNonNullableValue(defaultValue.string),
};
