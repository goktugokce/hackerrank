const gameOfThrones = require('./gameOfThrones');

test('gameOfThrones', () => {
  expect(gameOfThrones('xxxbbbxx')).toBe('NO');
  expect(gameOfThrones('abc')).toBe('NO');
  expect(gameOfThrones('abcbca')).toBe('YES');
});