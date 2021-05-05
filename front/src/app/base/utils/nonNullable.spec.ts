import { nonNullable } from './nonNullable';

describe('nonNullable', () => {
  it('array', () => {
    expect(nonNullable.array(undefined)).toEqual([]);
    expect(nonNullable.array(null)).toEqual([]);
    expect(nonNullable.array([1])).toEqual([1]);
  });
  it('arrayItem', () => {
    expect(nonNullable.arrayItem([undefined])).toEqual([]);
    expect(nonNullable.arrayItem([null])).toEqual([]);
    expect(nonNullable.arrayItem([1, null])).toEqual([1]);
  });
  it('number', () => {
    expect(nonNullable.number(undefined)).toEqual(0);
    expect(nonNullable.number(null)).toEqual(0);
    expect(nonNullable.number(1)).toEqual(1);
  });
  it('number', () => {
    expect(nonNullable.string(undefined)).toEqual('');
    expect(nonNullable.string(null)).toEqual('');
    expect(nonNullable.string('aaa')).toEqual('aaa');
  });
});
