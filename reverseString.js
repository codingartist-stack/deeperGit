function reverseString(string) {
  const stringToArray = string.split('');
  const reverseArray = stringToArray.reverse();
  const arrayToString = reverseArray.join('');

  return arrayToString;
}

module.exports = reverseString;
