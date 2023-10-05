const capitalize = require('./capitalize');
const reverseString = require('./reverseString');

test('capitalize first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('capitalize first letter', () => {
  expect(capitalize('heLlO')).toMatch('Hello');
});

test('reverse String', () => {
  expect(reverseString('hello')).toMatch('olleh');
});
