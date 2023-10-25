const timeConversion = require('./timeConversion');

test('timeConversion', () => {
  expect(timeConversion('07:05:45AM')).toBe('07:05:45');
});