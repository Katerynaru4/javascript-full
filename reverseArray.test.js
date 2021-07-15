import { reverseArray } from './reverseArray';

it('should return null if the argument is array', () => {
  const result = reverseArray('');
  expect(result).toBe(null);
});

it('the original array should remain unchanged', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  reverseArray(arr);
  expect(arr).toStrictEqual(arr);
});

it('should return an array, where the first element became the last, the second penultimate, ..., the last - the first, if the argument is an array,', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6]);
  expect(result).toStrictEqual([6, 5, 4, 3, 2, 1]);
});
