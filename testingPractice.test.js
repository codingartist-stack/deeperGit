const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

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
