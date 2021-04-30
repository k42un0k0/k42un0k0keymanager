function createNonNullableValue<T>(def: T): (value: NullableValue<T>) => T {
  return function nonNullableValue(value: NullableValue<T>): T {
    return value ?? def;
  };
}

type NullableValue<T> = T | null | undefined;

export const nonNullable = {
  array: function nonNullableArray<T>(arr: NullableValue<T[]>): T[] {
    return createNonNullableValue<T[]>([])(arr);
  },
  number: createNonNullableValue(0),
  string: createNonNullableValue(''),
};
