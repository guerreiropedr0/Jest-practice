const reverseString = require('./task2.js');

test('reversed "hey" to "yeh"', () => {
  expect(reverseString('hey')).toBe('yeh');
});

test('reversed "morning" to "gninrom"', () => {
  expect(reverseString('morning')).toBe('gninrom');
});

test('reversed "test" to "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});
