const makingAnagrams = require('./makingAnagrams');

test('makingAnagrams', () => {
  expect(makingAnagrams('cde', 'abc')).toBe(4);
  expect(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')).toBe(19);
});