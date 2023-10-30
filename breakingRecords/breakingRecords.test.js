const breakingRecords = require('./breakingRecords');

test('breakingRecords', () => {
  expect(breakingRecords([10,5,20,20,4,5,2,25,1])).toStrictEqual([2,4]);
});