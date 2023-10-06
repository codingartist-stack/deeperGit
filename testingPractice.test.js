const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');

//CAPITALIZE
test('capitalize first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('capitalize first letter', () => {
  expect(capitalize('heLlO')).toMatch('Hello');
});

//REVERSE STRING
test('reverse String', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

//CALCULATOR
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

//CAESAR'S CIPHER ENCRYPT
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
  expect(caesarCipher.encrypt('HEY THERE, TEDDY BEAR', 2)).toMatch(
    'JGA VJGTG, VGFFA DGCT'
  );
});

//CAESAR'S CIPHER DECRYPT
test('caesars cipher', () => {
  expect(caesarCipher.decrypt('B', 1)).toMatch('A');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('A', 1)).toMatch('Z');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('A', 2)).toMatch('Y');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('Z', 2)).toMatch('X');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt(',', 2)).toMatch(',');
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('JGA VJGTG, VGFFA DGCT', 2)).toMatch(
    'HEY THERE, TEDDY BEAR'
  );
});

test('caesars cipher', () => {
  expect(caesarCipher.decrypt('ROI DROBO, DONNI LOKB', 10)).toMatch(
    'HEY THERE, TEDDY BEAR'
  );
});
