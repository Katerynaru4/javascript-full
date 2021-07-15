import { getAdults } from './getAdults';

it('should return an empty object if argument is an empty object', () => {
  const result = getAdults({});
  expect(result).toStrictEqual({});
});

it('the original object should remain unchanged', () => {
  const obj = { Ann: 56, Andrey: 7 };
  getAdults(obj);
  expect(obj).toStrictEqual(obj);
});

it('should return an object that contains only those who have reached the age of 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toStrictEqual({ 'John Doe': 19, Bob: 18 });
});
