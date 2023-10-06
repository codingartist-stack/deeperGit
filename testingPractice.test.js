const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');

test('capitalize first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('capitalize first letter', () => {
  expect(capitalize('heLlO')).toMatch('Hello');
});

test('reverse String', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('calculate add', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test('calculate subtract', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test('calculate divide', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
test('calculate multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('caesars cipher', () => {
  expect(caesarCipher.encrypt('A', 1)).toMatch('B');
});

test('caesars cipher', () => {
  expect(caesarCipher.encrypt('Z', 1)).toMatch('A');
});

test('caesars cipher', () => {
  expect(caesarCipher.encrypt('Z', 2)).toMatch('B');
});

test('caesars cipher', () => {
  expect(caesarCipher.encrypt('Z A', 2)).toMatch('B C');
});

test('caesars cipher', () => {
  expect(caesarCipher.encrypt('Z. A', 2)).toMatch('B. C');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('B', 1)).toMatch('A');
});
