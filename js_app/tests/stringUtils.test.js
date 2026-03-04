
// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require('../src/stringUtils');

test('isPalindrome radar', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('isPalindrome Radar', () => {
  expect(isPalindrome('Radar')).toBe(true);
});

test('isPalindrome anita lava la tina', () => {
  expect(isPalindrome('anita lava la tina')).toBe(true);
});

test('isPalindrome python', () => {
  expect(isPalindrome('python')).toBe(false);
});

test('isPalindrome empty', () => {
  expect(isPalindrome('')).toBe(true);
});
