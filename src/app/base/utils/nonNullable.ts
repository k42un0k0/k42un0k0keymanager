function createNonNullableValue<T>(def: T) {
    return function nonNullableValue(value: T | null | undefined) {
        return value ?? def;
    }
}

type NullableValue<T> = T | null | undefined;

export const nonNullable = {
    array: function nonNullableArray<T>(arr: NullableValue<T[]>) {
        return createNonNullableValue<T[]>([])(arr);
    },
    number: createNonNullableValue(0),
    string: createNonNullableValue(''),
}

