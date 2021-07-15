import getMinSquaredNumber from './getMinSquaredNumber';

it('should return null if passed array is empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toBe(null);
});

it('should return null if passed argument is a string', () => {
  const result = getMinSquaredNumber('');
  expect(result).toStrictEqual(null);
});

it('should return square of the minimum number modulo of passed array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toStrictEqual(4);
});
