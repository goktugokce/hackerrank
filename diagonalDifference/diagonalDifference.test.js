const diagonalDifference = require('./diagonalDifference');

test('diagonalDifference', () => {
  expect(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])).toBe(15);
});