const compareTriplets = require('./compareTriplets');

test('compareTriplets', () => {
  expect(compareTriplets([17,28,30], [99,16,8])).toStrictEqual([2,1]);
});