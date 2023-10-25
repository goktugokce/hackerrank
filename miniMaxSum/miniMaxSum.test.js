const miniMaxSum = require('./miniMaxSum');

test('miniMaxSum', () => {
  expect(miniMaxSum([ 1, 2, 3, 4, 5])).toStrictEqual([10, 14]);
});