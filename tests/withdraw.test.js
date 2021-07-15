import { withdraw } from './withdraw';

it('should withdraw money from a specific account and return the account balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toBe(37);
});

it('balances array should change correctly in case withdrawing money from a specific account', () => {
  const balances = [1400, 87, -6];
  withdraw(['Ann', 'John', 'User'], balances, 'John', 50);
  expect(balances).toStrictEqual([1400, 37, -6]);
});

it('should return -1, if there is not enough money in the account ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toBe(-1);
});

it('money should not be withdrawn, if there is not enough money in the account)', () => {
  const balances = [1400, 87, -6];
  withdraw(['Ann', 'John', 'User'], balances, 'User', 10);
  expect(balances).toStrictEqual(balances);
});
