const birthdayCakeCandles = require('./birthdayCakeCandles');

test('birthdayCakeCandles', () => {
  expect(birthdayCakeCandles([3,2,1,3])).toBe(2);
});