import { calc } from './calculator';

it('operation "+" should work correctly', () => {
  const result = calc('2 + 2');
  expect(result).toBe('2 + 2 = 4');
});

it('operation "-" should work correctly', () => {
  const result = calc('6 - 2');
  expect(result).toBe('6 - 2 = 4');
});

it('operation "/" should work correctly', () => {
  const result = calc('6 / 2');
  expect(result).toBe('6 / 2 = 3');
});

it('operation "*" should work correctly', () => {
  const result = calc('2 * 2');
  expect(result).toBe('2 * 2 = 4');
});

it('should return null if argument is not string', () => {
  const result = calc([]);
  expect(result).toBe(null);
});
