const stringConstruction = require('./stringConstruction');

test('stringConstruction', () => {
  expect(stringConstruction('abcd')).toBe(4);
  expect(stringConstruction('abab')).toBe(2);
});