import sum, { getSquaredArray, getOddNumbers } from './calculator';

it('should return the sum of numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should return squared array', () => {
  expect(getSquaredArray([1, 2, 3])).toBe([1, 4, 9]);
});

it('should return filtered array with only odd numbers', () => {
  expect(getOddNumbers([1, 2, 3, 4])).toBe([1, 3]);
});
