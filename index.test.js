it('17 is equal to 17', () => {
  expect(17).toBe(17);
});

it('18 is not equal to 17', () => {
  expect(18).not.toBe(17);
});
const getEvenNumbers = (arr) => arr.filter((n) => n % 2 === 0);

it('should filter array and leave just even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7]);
  expect(result).toStrictEqual([2, 4, 6]);
});
