import { nonNullable } from './nonNullable';

describe('nonNullable', () => {
  describe('array', () => {
    it('return empty array when take undefined', () => {
      expect(nonNullable.array(undefined)).toEqual([]);
    });
    it('return empty array when take null', () => {
      expect(nonNullable.array(null)).toEqual([]);
    });
    it('return given value', () => {
      expect(nonNullable.array([1])).toEqual([1]);
    });
  });
  describe('arrayItem', () => {
    it('filter array having null or undefined', () => {
      const arg = [1, undefined, null];
      const expectValue = [1];
      expect(nonNullable.arrayItem(arg)).toEqual(expectValue);
    });
  });
  describe('number', () => {
    it('return zero when take undefined', () => {
      expect(nonNullable.number(undefined)).toEqual(0);
    });
    it('return zero when take null', () => {
      expect(nonNullable.number(null)).toEqual(0);
    });
    it('return given value', () => {
      expect(nonNullable.number(1)).toEqual(1);
    });
  });
  describe('string', () => {
    it('return empty string when take undefined', () => {
      expect(nonNullable.string(undefined)).toEqual('');
    });
    it('return empty string when take null', () => {
      expect(nonNullable.string(null)).toEqual('');
    });
    it('return given value', () => {
      expect(nonNullable.string('aaa')).toEqual('aaa');
    });
  });
});
