const anagram = require('./anagram');

test('anagram', () => {
  expect(anagram('xxxbbbxx')).toBe(1);
  expect(anagram('ababbb')).toBe(2);
  expect(anagram('abc')).toBe(-1);
});