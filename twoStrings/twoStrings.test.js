const twoStrings = require('./twoStrings');

test('twoStrings', () => {
  expect(twoStrings('abc', 'axx')).toBe('YES');
  expect(twoStrings('abcdfsfsfsasd', 'yuiouiuyui')).toBe('NO');
});