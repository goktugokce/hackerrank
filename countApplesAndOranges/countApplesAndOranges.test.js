const countApplesAndOranges = require('./countApplesAndOranges');

test('countApplesAndOranges', () => {
  expect(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])).toStrictEqual([1,1])
});