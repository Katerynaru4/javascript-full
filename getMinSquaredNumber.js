export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const minNumber = Math.min(...arr.map((n) => Math.abs(n)));
  return minNumber * minNumber;
};
